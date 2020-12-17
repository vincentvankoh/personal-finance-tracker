import React from "react";
import Tablehead1 from "./tablehead1";
import Tablefoot1 from "./tablefoot1";
import Tablerow1 from "./tablerow1";

export default function Table1(props) {
  return (
    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
      <Tablehead1 />
      <Tablefoot1 />
        <Tablerow1 />
    </table>
  )
}
