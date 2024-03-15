import styled from "styled-components";

const NumberSelector = ({
  setError,
  error,
  selectedNumber,
  setSelectedNumber,
}) => {
  const numbers = [1, 2, 3, 4, 5, 6];

  const noSelectedHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <Main>
      <p className="error">{error}</p>
      <div className="flex">
        {numbers.map((value, i) => (
          <Box
            isSelected={value == selectedNumber}
            key={i}
            onClick={() => noSelectedHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </Main>
  );
};

export default NumberSelector;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700px;
  }
  .error {
    color: red;
  }
`;
const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  font-size: 24px;
  font-weight: 700;
  place-items: center;
  display: grid;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
  transition: 0.1s background ease-in;

  &:hover {
    transition: 0.2s background ease-in;
  }
`;
