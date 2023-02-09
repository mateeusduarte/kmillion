import { useEffect, useRef, useState } from 'react';

export default function useIsRefVisible() {
  const [isVisible, setVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    if (ref.current) observer.observe(ref.current);
  }, []);

  return { isVisible, ref };
}
