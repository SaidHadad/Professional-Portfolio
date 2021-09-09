import React, { useRef, useEffect} from 'react';
import WebViewer from '@pdftron/webviewer';
import "./Resume.scss"

const Resume = () => {
  const viewer = useRef(null);

  // if using a class, equivalent of componentDidMount 
  useEffect(() => {
    WebViewer(
      {
        path: 'Professional-Portfolio/webviewer/lib',
        initialDoc: 'Professional-Portolio/files/SaidResumee.pdf',
      },
      viewer.current,
    ).then((instance) => {
      // const { documentViewer, annotationManager, Annotations } = instance.Core;

      // documentViewer.addEventListener('documentLoaded', () => {
      //   const rectangleAnnot = new Annotations.RectangleAnnotation({
      //     PageNumber: 1,
      //     // values are in page coordinates with (0, 0) in the top left
      //     X: 100,
      //     Y: 150,
      //     Width: 200,
      //     Height: 50,
      //     Author: annotationManager.getCurrentUser()
      //   });

      //   annotationManager.addAnnotation(rectangleAnnot);
      //   // need to draw the annotation otherwise it won't show up until the page is refreshed
      //   annotationManager.redrawAnnotation(rectangleAnnot);
      // });
    });
  }, []);

  return (
    <div>
      <div className="webviewer" ref={viewer}></div>
    </div>
  );
};

export default Resume;