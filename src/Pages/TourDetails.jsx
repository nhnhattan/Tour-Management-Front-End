import React, { useState, useRef, useEffect, useContext } from "react";

import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams, useNavigate } from "react-router-dom";

import tourData from "../assets/data/tours";
import calculatingAvgRating from "../utils/avgRating";
import avatar from "../assets/images/avatar.jpg";
import Booking from "../components/Booking/Booking";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";
import { AuthContext } from "../context/AuthContext";

import "../styles/tour-details.css";

const TourDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef("");
  const [tourRating, setTourRating] = useState(null);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/${id}`);

  const {
    photo,
    address,
    title,
    desc,
    price,
    reviews,
    city,
    distance,
    maxGroupSize,
  } = tour;

  const { totalRating, avgRating } = calculatingAvgRating(reviews);

  const options = { day: "numeric", month: "long", year: "numeric" };

  const submitHandler = async (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;

    try {
      if (!user || user === undefined || user === null) {
        alert("Please Login");
      }

      const reviewObj = {
        username: user.username,
        reviewText,
        rating: tourRating,
      };

      const res = await fetch(`${BASE_URL}/review/${id}`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(reviewObj),
      });
      //
      const result = await res.json();
      if (!res.ok) {
        alert(result.message);
      }
      alert(result.message);
      navigate(0);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, [tour]);

  return (
    <>
      {!tour ? (
        <>Loading</>
      ) : (
        <>
          <section>
            <Container>
              {loading && (
                <h4 className="pt-5 text-center">Loading..........</h4>
              )}
              {error && <h4 className="pt-5 text-center">{error}</h4>}
              {!loading && !error && (
                <Row>
                  <Col lg={8}>
                    <div className="tour__content">
                      <img src={photo} alt="" />
                      <div className="tour__info">
                        <h2>{title}</h2>
                        <div className="d-flex align-items-center gap-5">
                          <span className="tour__rating d-flex align-items-center gap-1">
                            <i
                              className="ri-star-fill"
                              style={{ color: "var(--secondary-color)" }}
                            ></i>{" "}
                            {avgRating === 0 ? null : avgRating}
                            {totalRating === 0 ? (
                              "Not rated"
                            ) : (
                              <span>({reviews?.length})</span>
                            )}
                          </span>
                          <span>
                            <i className="ri-map-pin-fill"></i> {address}
                          </span>
                        </div>
                        <div className="tour__extra-details">
                          <span>
                            <i className="ri-map-pin-2-line"></i> {city}
                          </span>
                          <span>
                            <i className="ri-money-dollar-circle-line"></i> $
                            {price} /per person
                          </span>
                          <span>
                            <i className="ri-map-pin-time-line"></i> ${distance}{" "}
                            k/m
                          </span>
                          <span>
                            <i className="ri-group-line"></i> {maxGroupSize}{" "}
                            people
                          </span>
                        </div>
                        <h5>Description</h5>
                        <p>{desc}</p>
                      </div>

                      <div className="tour__reviews mt-4">
                        <h4>Reviews ({reviews?.length} reviews)</h4>

                        <Form onSubmit={submitHandler}>
                          <div className="d-flex align-items-center rating__group mb-4 gap-3">
                            <span onClick={() => setTourRating(1)}>
                              1 <i className="ri-star-s-fill"></i>
                            </span>
                            <span onClick={() => setTourRating(2)}>
                              2 <i className="ri-star-s-fill"></i>
                            </span>
                            <span onClick={() => setTourRating(3)}>
                              3 <i className="ri-star-s-fill"></i>
                            </span>
                            <span onClick={() => setTourRating(4)}>
                              4 <i className="ri-star-s-fill"></i>
                            </span>
                            <span onClick={() => setTourRating(5)}>
                              5 <i className="ri-star-s-fill"></i>
                            </span>
                          </div>

                          <div className="review__input">
                            <input
                              type="text"
                              placeholder="share your thoughts"
                              ref={reviewMsgRef}
                              required
                            />
                            <button
                              className="btn primary__btn text-white"
                              type="submit"
                            >
                              Submit
                            </button>
                          </div>
                        </Form>

                        <ListGroup className="user__reviews">
                          {reviews?.map((review) => (
                            <div className="review__item">
                              <img src={avatar} alt="" />

                              <div className="w-100">
                                <div className="d-flex align-items-center justify-content-between">
                                  <div>
                                    <h5>{review.username}</h5>
                                    <p>
                                      {new Date(
                                        review.createdAt
                                      ).toLocaleDateString("en-US", options)}
                                    </p>
                                  </div>
                                  <span className="d-flex align-items-center ">
                                    {review.rating}{" "}
                                    <i className="ri-star-s-fill"></i>{" "}
                                  </span>
                                </div>
                                <h6>{review.reviewText}</h6>
                              </div>
                            </div>
                          ))}
                        </ListGroup>
                      </div>
                    </div>
                  </Col>

                  <Col lg={4}>
                    <Booking tour={tour} avgRating={avgRating} />
                  </Col>
                </Row>
              )}
            </Container>
          </section>
        </>
      )}
    </>
  );
};
export default TourDetails;
