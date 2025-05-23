import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Paper } from "@mui/material";
import Carousel, { carouselClasses } from "mui-carousel";
import Title from './Title'
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const ListCategory = () => {
    return (
      <Box sx={{ width: "100%", boxSizing: "border-box" }}>
        <div className='text-center py-8 text-3xl'>
          <Title text={'DANH MỤC'} />
        </div>
        <Carousel
          renderPrev={({ disabled }) => <Button disabled={disabled}><GrFormPrevious className="text-[30px] sm:text-[35px] md:text-[40px] text-gray-500" /></Button>}
          renderNext={({ disabled }) => <Button disabled={disabled}><GrFormNext className="text-[30px] sm:text-[35px] md:text-[40px] text-gray-500" /></Button>}
          dots={true}
          showSlides={5}
          speed={1000}
          spacing={5}
          autoPlay={true}
          infinity
          pauseOnHover
          centerMode
          transitionDuration={1000}
          disableTransition={false}
          sx={{
            [`& .${carouselClasses.list}`]: {
              px: 3,
            },
            [`& .${carouselClasses.item} > *`]: {
              transition: "all 0.5s",
            },
            [`& .${carouselClasses.center} > *`]: {
              transform: "scale(1.2)",
            },
          }}
        >
          {new Array(7).fill(0).map((_, index) => (
            <Paper key={index} sx={{ height: 200, background: "#fafafa", m: 3, borderRadius: "50%" }}>
              
            </Paper>
          ))}
        </Carousel>
      </Box>
    );
}

export default ListCategory
