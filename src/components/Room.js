import { React, useState, useEffect } from "react";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import dummy from "../db/data.json";
import * as box from "./Box/BoxStyle";
import BottomBtn from "./Common/BottomBtn";
import "./Time.css";
import "./Room.css";
import "./Box.css";
import logoPath from "../components/arrow.png";
import axios from "axios";

const Place = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const PlaceBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 129px;
  height: 3.9vh;
  border: none;
  border-radius: 24px;
  background: #fff;
  color: #4f66e3;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.28px;
`;
const Arrow = styled.img`
  margin: 0px 13px;
`;
const FinalTime = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 196px;
  height: 4.14vh;
  border-radius: 12px;
  background: #fff;
  margin: 0 auto;
  margin-top: 5.62vh;
  margin-bottom: 1.65vh;
  color: #778eff;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
`;
const InnerBox = styled.div`
  width: 100%;
  height: 39.69vh;
  background-color: #fff;
  border-radius: 20px;
  padding: 3.79vh 29px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const PlusBtn = styled.button`
  width: 30px;
  height: 35px;
  border-radius: 6px;
  background: #f1f1f1;
  color: #778eff;
  text-align: center;
  float: left;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  border:none;
`;
const Room = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [rooms, setRooms] = useState({ data: [] });
  const [roomId, setRoomid] = useState();
  const [btn, setBtn] = useState(false);

  const getToday = () => {
    const today = new Date();
    let dateFormat =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1 < 9
        ? "0" + (today.getMonth() + 1)
        : today.getMonth() + 1) +
      "-" +
      (today.getDate() < 9 ? "0" + today.getDate() : today.getDate());
    return dateFormat;
  };
  const today = getToday();

  const createRoom = async () => {
    
    const res = await axios.post(
      "http://localhost:3000/rooms",
      {
        source: location.state.start,
        destination: location.state.dst,
        date: today,
        time: location.state.time,
      },
      {
        withCredentials: true,
      }
    );
    window.location.reload();
  };

  const getRooms = async () => {
    const res = await axios.post(
      "http://localhost:3000/rooms/find",
      {
        source: location.state.start,
        destination: location.state.dst,
        date: today,
        time: location.state.time,
      },
      {
        withCredentials: true,
      }
    );
    setRooms(res);
  };

//   useEffect(() => {
//     getRooms();
//   }, []);

  const clickRoom = (event) => {
    setRoomid(event.target.value);
  };

  const clickCompleteButton = () => {
    navigate("/inside", {
      state: {
        start: location.state.start,
        dst: location.state.dst,
        time: location.state.time,
        roomId: roomId,
      },
    });
  };

  return (
    <box.Box>
      <box.PinHeight>
        <Place>
          <PlaceBtn>{location?.state.start}</PlaceBtn>
          <Arrow src={logoPath} />
          <PlaceBtn>{location?.state.dst}</PlaceBtn>
        </Place>
        <FinalTime>{location?.state.time}</FinalTime>
        <InnerBox>
          {
            <div className="peopleNum">
              <div>
                {rooms.data.map((item, ind) => {
                  return (
                    <button
                      key={ind}
                      className={item.member.length == 4 ? "full" : ""}
                      value={item.room_id}
                      onClick={clickRoom}
                    >
                      {item.member.length}/4
                    </button>
                  );
                })}
                <PlusBtn>+</PlusBtn>
              </div>
            </div>
          }
        </InnerBox>
      </box.PinHeight>
      <BottomBtn
        onClick={clickCompleteButton}
        btnName={"선택완료"}
        isSelected={btn}
      />
    </box.Box>
  );
};

export default Room;
