import React, { Component } from "react";
import Router from "next/router";
import NProgress from "nprogress";
import Items from "../components/items";
export default class Home extends Component {
 constructor(props) {
  super(props);
  Router.events.on("routeChangeStart", () => {
   NProgress.start();
  });

  Router.events.on("routeChangeComplete", () => {
   NProgress.done();
  });

  Router.events.on("routeChangeError", () => {
   NProgress.done();
  });
 }
 render() {
  return (
   <div>
    <Items />
   </div>
  );
 }
}
