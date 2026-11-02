
"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

const FoodContext = createContext();

const initialDonations = [
  {
    id: 1,
    name: "Fresh Vegetable Meals",
    quantity: "20 meals",
    description: "Freshly prepared vegetable meals",
    location: "Mysuru",
    deadline: "Today, 8 PM",
    donor: "Green Restaurant",
    status: "Available",
    otp: "123456",
  },
  {
    id: 2,
    name: "Rice and Dal",
    quantity: "30 meals",
    description: "Fresh rice and dal",
    location: "Mysuru",
    deadline: "Today, 9 PM",
    donor: "Food Palace",
    status: "Available",
    otp: "654321",
  },
];

export function FoodProvider({ children }) {
  const [donations, setDonations] = useState(initialDonations);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load saved donations
  useEffect(() => {
    try {
      const savedDonations = localStorage.getItem("foodDonations");

     if (savedDonations) {
  const parsedDonations = JSON.parse(savedDonations);

  const updatedDonations = parsedDonations.map((food) => ({
    ...food,
    otp:
      food.otp ||
      String(Math.floor(100000 + Math.random() * 900000)),
  }));

  setDonations(updatedDonations);
}
    } catch (error) {
      console.error("Error loading donations:", error);
    }

    setIsLoaded(true);
  }, []);

  // Save donations
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(
        "foodDonations",
        JSON.stringify(donations)
      );
    }
  }, [donations, isLoaded]);

  // Add a new donation with a generated OTP
  function addDonation(newDonation) {
    const donation = {
      ...newDonation,
      id: Date.now(),
      status: "Available",
      otp: String(Math.floor(100000 + Math.random() * 900000)),
    };

    setDonations((previous) => [...previous, donation]);
  }

  // NGO requests food
  function requestDonation(id) {
    setDonations((previous) =>
      previous.map((food) =>
        food.id === id
          ? { ...food, status: "Requested" }
          : food
      )
    );
  }

  // Volunteer accepts pickup
  function acceptDonation(id) {
    setDonations((previous) =>
      previous.map((food) =>
        food.id === id
          ? { ...food, status: "Accepted" }
          : food
      )
    );
  }

  // Verify OTP before completing delivery
  function completeDonation(id, enteredOtp) {
    const donation = donations.find((food) => food.id === id);

    if (!donation || donation.otp !== enteredOtp) {
      return false;
    }

    setDonations((previous) =>
      previous.map((food) =>
        food.id === id
          ? { ...food, status: "Delivered" }
          : food
      )
    );

    return true;
  }

  return (
    <FoodContext.Provider
      value={{
        donations,
        addDonation,
        requestDonation,
        acceptDonation,
        completeDonation,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
}

export function useFood() {
  return useContext(FoodContext);
}
