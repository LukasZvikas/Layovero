import React, { Component } from "react";
import ProgImageLoading from "../blog/loadingImage";

class About1 extends Component {
  render() {
    return (
      <div className="about">
        <div className="about__grid-item about__photo">
          <ProgImageLoading
            regPhoto={"../../../../uploads/1994942444a34606069bbc3b83fdeb70.jpg"}
            thumbPhoto={"../../../../uploads/1994942444a34606069bbc3b83fdeb70thumb.jpg"}
            imageClass={"secondary"}
          />
        </div>
        <div className="about__grid-item">
          <div className="about__header-main">Who We Are</div>
          <div className="about__text-box">
            <p className="about__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

   {/*         //<p className="about__text">
            //  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
             // eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              //enim ad minim veniam, quis nostrud exercitation ullamco laboris
              //nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              //reprehenderit in voluptate velit esse cillum dolore eu fugiat
              //nulla pariatur. Excepteur sint occaecat cupidatat non proident
            //</p>*/}

            <p className="about__text">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur?
            </p>

            <p className="about__text">
              Quis autem vel eum iure reprehenderit qui in ea voluptate velit
              esse quam nihil molestiae consequatur, vel illum qui dolorem eum
              fugiat quo voluptas nulla pariatur?
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About1;
