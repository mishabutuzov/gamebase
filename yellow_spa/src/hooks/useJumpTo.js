import { useNavigate } from "react-router";

const useJumpTo = (id = false) => {
  const navigate = useNavigate();

  if (id) {
    return () => navigate(`/details/${id}`);
  } else {
    return () => navigate(`/gamebase/`);
  }
};

export default useJumpTo;