/* eslint-disable */
import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import {
  Container,
  NavbarBrand,
  Navbar,
  Nav,
  NavItem,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import { auth } from "../firebaseinit";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import logo from "../../assets/images/logos/white-text.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // 사용자의 로그인 상태를 실시간으로 감지
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUserData(user);
    });

    // 컴포넌트 언마운트 시 구독 해제
    return () => unsubscribe();
  }, []);

  const toggle = () => setIsOpen(!isOpen);

  const handleLoginLinkClick = () => {
    // 구글 계정으로 로그인 처리
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((data) => {
        setUserData(data.user);
      })
      .catch((err) => console.log("Login Error: " + err));
  };

  const handleLogout = () => {
    // 로그아웃 처리
    signOut(auth)
      .then(() => {
        setUserData(null);
      })
      .catch((err) => console.log("Logout Error: " + err));
  };

  return (
    <div className="topbar" id="top">
      <div className="header6">
        <Container className="po-relative">
          <Navbar className="navbar-expand-lg h6-nav-bar">
            <NavbarBrand href="/">
              <img src={logo} alt="wrapkit" />
            </NavbarBrand>
            <NavbarToggler onClick={toggle}>
              <span className="ti-menu"></span>
            </NavbarToggler>
            <Collapse
              isOpen={isOpen}
              navbar
              className="hover-dropdown font-14 justify-content-end"
              id="h6-info"
            >
              <Nav navbar className="ms-auto">
                <NavItem>
                  <Link className="nav-link" to={"/newsfeed"}>
                    뉴스피드
                  </Link>
                </NavItem>
                {userData ? (
                  <>
                    {/* 사용자가 로그인한 경우 */}
                    <NavItem>
                      <span className="nav-link">
                        안녕하세요, {userData.displayName}님
                      </span>
                    </NavItem>
                    <NavItem>
                      <Link
                        className="nav-link"
                        to={"/"}
                        onClick={handleLogout}
                      >
                        로그아웃
                      </Link>
                    </NavItem>
                  </>
                ) : (
                  <>
                    {/* 사용자가 로그인하지 않은 경우 */}
                    <NavItem>
                      <Link
                        className="nav-link"
                        to={"/"}
                        onClick={handleLoginLinkClick}
                      >
                        로그인
                      </Link>
                    </NavItem>
                    <NavItem>
                      <Link className="nav-link" to={"/custom-components"}>
                        회원가입
                      </Link>
                    </NavItem>
                  </>
                )}
              </Nav>
              <div className="act-buttons">
                <Link
                  to="/#coming"
                  className="btn btn-success-gradiant font-14"
                >
                  다크모드/라이트모드{" "}
                </Link>
              </div>
            </Collapse>
          </Navbar>
        </Container>
      </div>
    </div>
  );
};
export default Header;
