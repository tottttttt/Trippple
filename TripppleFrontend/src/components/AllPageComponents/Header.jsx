import React from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Button, Toolbar, Grid, Box } from "@mui/material";
import { Context } from "../../App";
import { useModal } from "../../hooks/useModal";
import { useContext } from "react";
import { observer } from "mobx-react-lite";

const Header = () => {
  const { store } = useContext(Context);
  const router = useNavigate();
  const { openModal } = useModal();

  return (
    <AppBar position="static" sx={{ backgroundColor: "#0b0c10" }}>
      <Toolbar>
        <Grid container>
          <Grid item xs={6} sm={7} md={9}>
            <Box sx={{ textAlign: "left", m: 1, mt: 1.5 }}>
              {/* кнопка-логотип */}
              <Button
                // color="inherit"
                size="large"
                disableRipple
                variant="raised"
                sx={{ ml: "3rem", color: "#66FCF1" }}
                onClick={() => {
                  router("/");
                }}
              >
                Trippple
              </Button>
            </Box>
          </Grid>
          {!store.isAuth ? (
            <Grid
              item
              xs={6}
              sm={5}
              md={3}
              display="flex"
              justifyContent={"center"}
            >
              {/* кнопка входа */}
              <Button
                disableRipple
                sx={{ color: "#66FCF1" }}
                size="large"
                variant="raised"
                onClick={openModal}
              >
                Войти
              </Button>
              <Button
                disableRipple
                variant="raised"
                sx={{ color: "#66FCF1" }}
                size="large"
                onClick={() => {
                  router("/sign-up");
                }}
              >
                Регистрация
              </Button>
            </Grid>
          ) : (
            <Grid
              item
              xs={6}
              sm={5}
              md={3}
              display="flex"
              justifyContent={"center"}
            >
              <Box
                sx={{ textAlign: "center", m: 1, mt: 1.5, color: "#66FCF1" }}
              >
                {store.user.name} {store.user.lastName}
                <Button
                  disableRipple
                  sx={{ color: "red" }}
                  variant="raised"
                  size="large"
                  onClick={() => {
                    store.logout();
                  }}
                >
                  Выйти
                </Button>
              </Box>
            </Grid>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default observer(Header);
