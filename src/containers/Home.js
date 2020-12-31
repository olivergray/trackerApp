import React, { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { LinkContainer } from "react-router-bootstrap";
import { useAppContext } from "../libs/contextLib";
import "./Home.css";

export default function Home() {
  const [notes, setNotes] = useState([]);
  const { isAuthenticated } = useAppContext();
  const [isLoading, setIsLoading] = useState(true);

  function renderNotesList(notes) {
    return (
      <>
        <LinkContainer to ="Game">
          <ListGroup.Item action className="py-3 text-nowrap text-truncate">
            <span className="font-weight-bold">Cancellation Task</span>
          </ListGroup.Item>
        </LinkContainer>
      </>
    );
  }

  function renderLander() {
    return (
      <div className="lander">
        <h1>Gray Matters: Stroke</h1>
        <p className="text-muted">Your rehabilitation assistant</p>
      </div>
    );
  }

  function renderNotes() {
    return (
      <div className="notes pl-5">
        <h1 className="pt-5 pb-3 mt-3 mb-2 border-bottom">Gray Matters: Stroke</h1>
        <p className="text-muted">Your rehabilitation assistant</p>
        <h3 className="pb-3 mt-4 mb-3 border-bottom">What would you like to track?</h3>
        <ListGroup>
          <div className="mr-auto">
            {renderNotesList(notes)}
          </div>
        </ListGroup>
      </div>
    );
  }

  return (
    <div className="Home">
      {isAuthenticated ? renderNotes() : renderLander()}
    </div>
  );
}