import React from "react";
import StatusMessage from "../StatusMessage/StatusMessage";

type Props = {
  children: React.ReactNode
}

type State = {
  hasError: boolean
}

const onGoHome = () => {
  window.location.replace("#/");
  window.location.reload()
}

export class ErrorBoundary extends React.Component<Props, State> {
  state = {
    hasError: false
  };
  
  static getDerivedStateFromError(): State {
    return {
      hasError: true
    };
  }
  
  componentDidCatch(error: Error, info: React.ErrorInfo ) {
    console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <StatusMessage title="Unexpected error" variant="error" details={[
        { id: 1, message: "Something went wrong while rendering this page." },
        { id: 2, message: "Please refresh the page or try again later."},
        { id: 3, message: <button className="main-button" onClick={onGoHome}>Go home</button>},
      ]}/>;
    }
    return this.props.children;
  }
}