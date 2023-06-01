import React from "react";
import HistoryRow from "./HistoryRow";
import HistoryLabel from "./HistoryLabel";
import { Text } from "components";

const HistoryTable = ({ historyData }) => {
  return (
    <>
      <HistoryLabel></HistoryLabel>
      {historyData.map((history, index) => (
        <HistoryRow key={index} history={history} number={index} />
      ))}
    </>
  );
};

export default HistoryTable;
