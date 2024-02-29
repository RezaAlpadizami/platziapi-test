import React from "react";
import { Input } from "antd";

const { Search } = Input;

const InputSearch: React.FC<{
  placeholder: string;
  onSearch?: (value: string) => void;
}> = ({ placeholder, onSearch = () => {} }) => {
  return (
    <Search
      className="w-72 sm:w-full"
      placeholder={placeholder}
      onSearch={onSearch}
      enterButton
    />
  );
};

export default InputSearch;
