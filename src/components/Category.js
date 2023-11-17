"use client";
import Link from "next/link";
import { Stack, Typography, Card, CardContent, useTheme } from "@mui/material";
import Image from "next/image";

const Category = ({ index, item, link }) => {
  const theme = useTheme();
  console.log({ item });
  return (
    <Link style={{ textDecoration: "none" }} href={`/restaurant/${item?.id}`}>
      <Card sx={{ 
        // backgroundColor: theme.palette.custom.grayLight,
        py: 2 }}>
        <CardContent>
          <Stack
            justifyContent={"center"}
            direction="column"
            spacing={1}
            sx={{ overflow: "hidden" }}
          >
            <Image
              // src={"https://via.placeholder.com/300.png"}
              src={item?.image_url}
              alt="product-image"
              width={250}
              height={200}
            />
            <Typography color="custom.orange" variant="h3" textTransform="uppercase">
              {item?.name}
            </Typography>
            {/* <Typography variant="body2" color="black">
              {item?.children?.map((sub) => (
                <>{sub?.name} , </>
              ))}
            </Typography> */}
          </Stack>
        </CardContent>
      </Card>
    </Link>
  );
};

export default Category;
