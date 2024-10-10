import React, { Component } from 'react';

interface HomePageState {
  currentTime: string;
  displayedText: string;
  isDeleting: boolean;
  typingIndex: number;
}

class HomePage extends Component<{}, HomePageState> {
  private timer: NodeJS.Timeout | undefined;
  private typingInterval: NodeJS.Timeout | undefined;
  private fullText = "my name is Lincoln.";

  state: HomePageState = {
    currentTime: new Date().toLocaleTimeString(),
    displayedText: '',
    isDeleting: false,
    typingIndex: 0,
  };

  componentDidMount() {
    // Set interval to update the time every second
    this.timer = setInterval(() => {
      this.setState({ currentTime: new Date().toLocaleTimeString() });
    }, 1000);

    // Start the typing effect
    this.startTyping();
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
    if (this.typingInterval) {
      clearInterval(this.typingInterval);
    }
  }

  startTyping = () => {
    this.typingInterval = setInterval(() => {
      const { typingIndex, isDeleting, displayedText } = this.state;
      const fullText = this.fullText;

      if (!isDeleting) {
        // Typing forward
        if (typingIndex < fullText.length) {
          this.setState({
            displayedText: fullText.substring(0, typingIndex + 1),
            typingIndex: typingIndex + 1,
          });
        } else {
          // Once the text is fully typed, start deleting after a delay
          setTimeout(() => this.setState({ isDeleting: true }), 1000);
        }
      } else {
        // Deleting backward
        if (displayedText.length > 0) {
          this.setState({
            displayedText: fullText.substring(0, displayedText.length - 1),
          });
        } else {
          // Once text is fully deleted, start typing again
          this.setState({
            isDeleting: false,
            typingIndex: 0,
          });
        }
      }
    }, 150); // Adjust the speed of typing and deleting here
  };

  render() {
    const { currentTime, displayedText } = this.state;

    return (
      <div style={{ fontFamily: 'monospace', backgroundColor: '#001729', color: '#00FF00', padding: '20px', minHeight: '100vh' }}>
        <div style={{ padding: '20px', marginTop: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '33vh' }}>
          <h2>Hi, {displayedText}</h2>
        </div>
        <div style={{ position: 'absolute', bottom: '20px', right: '20px', color: '#fff' }}>
          <p>Current Time: {currentTime}</p>
        </div>
      </div>
    );
  }
}

export default HomePage;