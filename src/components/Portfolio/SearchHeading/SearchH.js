import React from 'react';
import{
    HeaderContainer,
    Heading,
    SearchBar,
    
} from './styledComponents';



const SearchH = ({ setSearchTerm }) => {
  return (
    <>
     
     <HeaderContainer>
      <Heading>Selected Success Stories from Our 200k -Project Portfolio</Heading>
      <SearchBar
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
   
    </HeaderContainer>
    </>
  );
};

export default SearchH;
