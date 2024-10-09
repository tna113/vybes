import React, { useState } from "react";
import { Screen } from "../../components/Screen";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import AppInput from "../../components/AppInput";

export default function SearchScreen() {
  const [searchStr, setSearchStr] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setSearchStr(event.target.value);
  };

  const handleSearch = async () => {
    console.log("seaching for", searchStr);
  };

  return (
    <Screen>
      <Header
        title="search"
        subtitle="please search for a song below"
        showBackButton={true}
        onBackButtonClick={() => navigate("/home")}
      />
      <AppInput
        handleInputChange={handleInputChange}
        handleOnSubmit={handleSearch}
      />
    </Screen>
  );
}
