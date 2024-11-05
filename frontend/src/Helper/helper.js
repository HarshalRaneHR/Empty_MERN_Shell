let JSONObj = {};

export const readJSONFile = function (file, callback) {
  let rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4 && rawFile.status === 200) {
      if (callback) {
        callback(JSON.parse(rawFile.responseText));
      }
    }
  };
  rawFile.send(null);
};

export const setJSONData = (data) => {
  JSONObj = data;
};
export const getJSONData = () => {
  return JSONObj;
};
