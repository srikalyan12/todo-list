import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

interface Props {
  onSearch:  React.Dispatch<React.SetStateAction<string>>
}

const SearchInput = ({ onSearch }: Props) => {
    return <Search placeholder={"Input search text"}
    allowClear
    enterButton="Search"
    size="large"
    onSearch={(value:string) => onSearch(value)}
  />
}

export default SearchInput;