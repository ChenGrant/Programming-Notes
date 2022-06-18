import { useEffect } from "react";
import { useNavigate } from "react-router";

const Error = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, [navigate]);

  return null;
};

export default Error;
