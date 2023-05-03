import { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { login } from "../redux/authReducer/action";
import { useNavigate, useLocation } from "react-router-dom";
import { VStack, Heading, Input, Box } from "@chakra-ui/react";

export const Login = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let dispatch = useDispatch();
  let { isAuth, isError, errMessage } = useSelector((store) => {
    return {
      isAuth: store.authReducer.isAuth,
      isError: store.authReducer.isError,
      errMessage: store.authReducer.errMessage,
    };
  }, shallowEqual);

  let location = useLocation();
  let navigate = useNavigate();

  let handleLogin = (e) => {
    e.preventDefault();

    let userData = {
      email,
      password,
    };
    dispatch(login(userData)).then((res) => {
      navigate(location.state);
    });
  };

  return (
    <>
      {isAuth && <Heading>Login Successful</Heading>}
      {isError && <Heading>{errMessage}</Heading>}
      <VStack mt={-10}>
        <Box
          mt={"100px"}
          border={"1px solid gray"}
          p={"10px"}
          borderRadius={"5px"}
          boxShadow={
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;"
          }
          display={"flex"}
          flexDirection={"column"}
        >
          <Heading>Login</Heading>
          <form onSubmit={handleLogin}>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input type="submit" value={"Login"} cursor={"pointer"} />
          </form>
        </Box>
      </VStack>
    </>
  );
};
