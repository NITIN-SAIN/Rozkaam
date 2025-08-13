import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AuthWrapper() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/login');
  }, [navigate]);

  return null;
} 