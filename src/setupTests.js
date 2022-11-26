import '@testing-library/jest-dom'

// for testing without error
global.IntersectionObserver = class IntersectionObserver {
    constructor() {}
  
    disconnect() {
      return null;
    }
  
    observe() {
      return null;
    }
  
    takeRecords() {
      return null;
    }
  
    unobserve() {
      return null;
    }
  };