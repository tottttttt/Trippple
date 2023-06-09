import React, { useContext, useState } from "react";
import { useModal } from "../../hooks/useModal";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Grid,
  Stack,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Context } from "../../App";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { observer } from "mobx-react-lite";
import shadows from "@mui/material/styles/shadows";

const AccessoryCard = (props) => {
  const inBucket = async () => {
    try {
      setSave(true);
      setAmount(1);
      await store.appendBucketItem(props.data.id);
    } catch (err) {
      store.setAlertMessage(String(err.response.data));
      store.setAlertVariant(false);
      store.setAlertIsOpen(true);
    }
  };
  async function ChangeAmount(count) {
    try {
      let new_amount = amount + count;
      setAmount(new_amount);
      await store.changeAmountInBucket(props.data.id, new_amount);
    } catch (err) {
      store.setAlertMessage(String(err.response.data));
      store.setAlertVariant(false);
      store.setAlertIsOpen(true);
    }
  }
  const RemoveItemFromBucket = async () => {
    try {
      setSave(false);
      setAmount(0);
      await store.deleteBucketItem(props.data.id);
    } catch (err) {
      store.setAlertMessage(String(err.response.data));
      store.setAlertVariant(false);
      store.setAlertIsOpen(true);
    }
  };
  const { store } = useContext(Context);
  const [amount, setAmount] = useState(
    props.data.amount ? props.data.amount : 0
  );
  const { openModal } = useModal();
  const [save, setSave] = useState(props.data.isBucket);
  const [color, setColor] = useState("#66FCF1");
  const router = useNavigate();

  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "start",
        ml: "1rem",
        mr: "1rem",
        mt: "1rem",
        background: "#0e151c",
        borderRadius: "20px",
      }}
    >
      <Grid container sx={{ alignItems: "center" }}>
        <Grid item xs={12} sm={3}>
          <CardMedia
            sx={{ width: "80%", ml: "2rem", my: "1rem" }}
            component="img"
            image={"http://127.0.0.1:8000" + props.data.photo}
            alt="картинка"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ cursor: "pointer" }}
              color={color}
              onMouseEnter={() => {
                setColor("#45A29E");
              }}
              onMouseLeave={() => {
                setColor("#66FCF1");
              }}
              onClick={() => {
                router(`/shop/${props.data.id}`);
                window.scrollTo(0, 0);
              }}
            >
              {props.data.title}
            </Typography>
            <Typography variant="body2" color="#45A29E">
              {props.data.content}
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} sm={3} display="flex">
          <CardActions
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {!save ? (
              <Box
                display={"flex"}
                flexDirection="column"
                alignItems={"center"}
              >
                <Typography color="white" sx={{ mb: "0.5rem" }}>
                  {" "}
                  Цена: {props.data.price}
                </Typography>
                <Button
                  size="small"
                  variant="outlined"
                  color="success"
                  onClick={() => {
                    store.isAuth ? inBucket() : openModal();
                  }}
                >
                  В корзину
                </Button>
              </Box>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  sx={{ mb: "0.5rem" }}
                >
                  <Button
                    disableRipple
                    variant="raised"
                    onClick={() => {
                      amount == 1 ? RemoveItemFromBucket() : ChangeAmount(-1);
                    }}
                  >
                    <RemoveIcon sx={{ color: "#66FCF1" }} />
                  </Button>
                  <span style={{ color: "#66FCF1" }}>{amount}</span>
                  <Button
                    disableRipple
                    variant="raised"
                    onClick={() => {
                      if (amount < 9) {
                        ChangeAmount(1);
                      }
                    }}
                  >
                    <AddIcon sx={{ color: "#66FCF1" }} />
                  </Button>
                </Stack>
                <Button
                  size="small"
                  variant="raised"
                  sx={{ color: "red" }}
                  onClick={() => RemoveItemFromBucket()}
                >
                  Убрать из корзины
                </Button>
              </Box>
            )}
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
};
export default observer(AccessoryCard);
