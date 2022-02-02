import React, { useState, useEffect } from "react";
import { db, auth } from "../../firebase-config";
import { addDoc, collection, getDocs } from "firebase/firestore";

import Classes from "./SetGoalArea.module.scss";
export default function SetGoalArea() {
  const collectionRef = collection(db, "users");

  const goals = [
    "Get leaner",
    "Get active again",
    "Reduce Pain or injury",
    "Impove cardio or speed",
    "Improve sports performance",
  ];
  const [userGoal, setUserGoal] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(collectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(users);
    };
    getUsers();
  }, [collectionRef, users]);

  const handleChange = (event) => {
    const { value } = event.target;
    setUserGoal(value);
    console.log(userGoal);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let uids = [];
    users.map((ele) => {
      return uids.push(ele.uid);
    });
    if (uids.includes(auth.currentUser.uid)) {
      alert("goal already set");
    } else {
      await addDoc(collectionRef, {
        uid: auth.currentUser.uid,
        goal: userGoal,
      });
      alert("goal set");
    }
  };

  return (
    <div className={Classes.setGoalContainerMain}>
      <form onSubmit={handleSubmit}>
        <div className={Classes.radioSection}>
          {goals.map((element, index) => {
            return (
              <div className={Classes.inputArea} key={index}>
                <input
                  type="radio"
                  value={element}
                  name="goal"
                  onChange={handleChange}
                />
                <label>{element}</label>
              </div>
            );
          })}
        </div>
        <input type="submit" value="Submit" className={Classes.submitBtn} />
      </form>
    </div>
  );
}
