import React from "react";
import Navbar from "../Components/Navbar";
import Avatar from "../Components/Avatar";
import Button from "../Components/Button";

const Header = () => {
  return (
    <div className="header-cv">
      <Navbar />
      <div className="header-foreground">
        <div>
          <span>
            <h1>DWAYNE</h1>
            <h1>JHONSON</h1>
            <span>
                <Button className="btn-contact" name="Contacter moi"/>
                <a target="_blank" href="./assets/pdf/cv.jpg"><Button className="btn-download" name="Telecharger CV"/></a>
            </span>
          </span>
        </div>
        <div>
          <Avatar />
        </div>
      </div>
    </div>
  );
};

export default Header;
