import React from "react";
import Location from "../components/Location/Location";

const About = () => {
  return (
    <div className="container pt-14">
      <div className="py-10">
        <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 font-bold text-3xl">
          About Us
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
          soluta ullam quasi nulla quae fugiat assumenda illum quidem,
          accusantium nemo quam ipsum repellat delectus libero tempore magni
          architecto maxime velit dolores facilis temporibus labore hic eveniet?
          Sequi dignissimos culpa quas quam harum dolorem voluptatum non quae
          facilis, dicta dolore neque quaerat laboriosam. Ut rem alias hic neque
          velit aliquid. Tempora?
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          molestiae magni amet, labore fugit explicabo veritatis similique
          maiores, iure iste laborum a, perferendis doloremque officia
          asperiores. Praesentium animi maxime cumque tenetur aliquam, molestiae
          quasi ratione neque qui, a iusto unde.
        </p>
      </div>
      <Location />
    </div>
  );
};

export default About;
