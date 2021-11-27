import React, { useEffect, useState } from "react";
import Habit from "./Habit";
import SearchBar from "./SearchBar";
import db from "../firebase";
import { onSnapshot, collection } from "@firebase/firestore";

const HabitList = ({ mainSection, handleMainSection }) => {
  // this initial state will be replaced with API request
  const [habits, setHabits] = useState([
    // { name: "Sample habit 1", id: 1 },
    // { name: "Sample habit 2", id: 2 },
    // { name: "Sample habit 3", id: 3 },
  ]);

  useEffect(
    () => 
    onSnapshot(collection(db, "users/9luc2LxNsdnjA3xJs86w/user_habits"), (snapshot) => 
      setHabits(snapshot.docs.map((doc) => doc.data()))
      //setHabits(snapshot.docs.map((doc) => doc.data())); // make sure that setHabits works and sets snapshot to habits
      //console.log(habits); // habits should have the habits from firebase, not the initial habits we hardcoded
        ), 
      []
    );
    
  return (
    <div className="flex flex-col">
      <SearchBar />
      {habits.map(h => (
        <Habit
          habitName={h.habit_name}
          handleMainSection={handleMainSection}
          key={h.id}
        />
      ))}
    </div>
  );
};

export default HabitList;
