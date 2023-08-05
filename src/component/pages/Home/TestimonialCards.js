import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./TestimonialCards.css";

const ratingLevels = { "0.5": faStarHalfStroke, "1": faStar };

const TestimonialCards = ({ customers }) => {
    return (
        <article className="testimonial-card">
            <img src={customers.image} alt={customers.fullName} />
            <h4>{customers.fullName}</h4>
            <span>
                {customers.rating.map((ratingPoint, index) =>
                    <FontAwesomeIcon
                        key={index}
                        icon={ratingLevels[ratingPoint]}
                        size="xs"
                    />
                )}
            </span>
            <blockquote><p>"{customers.says}"</p></blockquote>
        </article>
    );
};

export default TestimonialCards;