import React, { useEffect, useState } from "react";

import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import tmdbApi, { category, movieType } from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";
import { useHistory } from "react-router-dom";
import Button, { OutlineButton } from "../button/Button";
import "./hero-slide.scss";

const HeroSlide = () => {
    SwiperCore.use([Autoplay]);

    const [movieItems, setMovieItems] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            const params = { page: 1 };

            try {
                const response = await tmdbApi
                    .getMoviesList(movieType.popular, { params })
                    .then((res) => setMovieItems(res.results.slice(0, 4)));
            } catch (err) {
                console.log(err);
            }
        };
        console.log(movieItems);
        getMovies();
    }, []);

    return (
        <div className="hero-slide">
            <Swiper
                modules={[Autoplay]}
                grabCursor={true}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ delay: 3000 }}
            >
                {movieItems.map((item, i) => (
                    <SwiperSlide key={i}>
                        {({ isActive }) => (
                            <HeroSlideItem
                                item={item}
                                className={`${isActive ? "active" : ""}`}
                            />
                        )}
                    </SwiperSlide>
                ))}{" "}
            </Swiper>
        </div>
    );
};

const HeroSlideItem = (props) => {
    let history = useHistory();

    const item = props.item;

    const background = apiConfig.originalImage(
        item.backdrop_path ? item.backdrop_path : item
    );

    return (
        <div
            className={`hero-slide__item ${props.className}`}
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="hero-slide__item__content container">
                <div className="hero-slide__item__content__info">
                    <h2 className="title">{item.title}</h2>
                    <div className="overview">{item.overview}</div>
                    <div className="btns">
                        <Button
                            onClick={() => history.push("/movie/" + item.id)}
                        >
                            Watch Now
                        </Button>
                        <OutlineButton onClick={() => console.log("trailer")}>
                            Watch trailer
                        </OutlineButton>
                    </div>
                </div>
                <div className="hero-slide__item__content__poster">
                    <img src={apiConfig.w500Image(item.poster_path)} alt="" />
                </div>
            </div>
        </div>
    );
};

export default HeroSlide;
