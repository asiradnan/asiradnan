"use client"
import Clarity from '@microsoft/clarity';
import { useEffect } from 'react';

export const ClarityProvider = () => {
  useEffect(() => {
    Clarity.init('soi9b2m531');
  }, []);

  return null;
};