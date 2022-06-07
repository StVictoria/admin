import { createPortal } from "react-dom";
import styled from "styled-components";
import CircularProgress from '@mui/material/CircularProgress';

const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 10000;
`;

const root: HTMLElement = document.getElementById("root") as HTMLElement;

const Loader = () => {
  const loader: JSX.Element = (
    <LoaderWrapper>
      <CircularProgress />
    </LoaderWrapper>
  );
  return createPortal(loader, root);
};

export default Loader;