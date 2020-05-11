import React, { useState } from 'react';
import handlers from '../utils/handlers';

const useHandlers = (keyval) => {
  return handlers[keyval];
}

export default useHandlers;
