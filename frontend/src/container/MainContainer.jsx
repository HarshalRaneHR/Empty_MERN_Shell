import { useEffect } from "react";
import { getJSONData, readJSONFile, setJSONData } from "../Helper/helper";
import { connect } from "react-redux";
import ContentArea from "./ContentArea";
import "./MainContainer.css";

const MainContainer = (props) => {
  const { updatJSONData } = props;

  useEffect(() => {
    readJSONFile("./assets/json/config.json", (config) => {
      readJSONFile("./assets/json/images.json", (images) => {
        readJSONFile("./assets/json/text.json", (text) => {
          updatJSONData({ config, images, text });
          setJSONData({ config, images, text });
        });
      });
    });
  }, []);

  return (
    <div id="MainContainer">
      <ContentArea />
    </div>
  );
};

// export default MainContainer;

const mapStateToProps = (state) => {
  return {
    JSONData: state.JSONData,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updatJSONData: (data) =>
      dispatch({
        type: "JSON_DATA",
        payload: data,
      }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
