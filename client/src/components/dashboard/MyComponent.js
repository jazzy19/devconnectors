import { useEffect, useRef } from 'react';
import WebViewer from '@pdftron/webviewer';
import React, { Component } from 'react';

const App = () => {
  const viewer = useRef(null);

  useEffect(() => {
    WebViewer(
      {
        path: '../../../public/webviewer/lib',
        initialDoc: '../../../public/files/Resume.pdf',
      },
      viewer.current
    ).then((instance) => {
      const { docViewer, Annotations } = instance;
      // you can now call WebViewer APIs here...
      const annotManager = docViewer.getAnnotationManager();

      docViewer.on('documentLoaded', () => {
        const rectangleAnnot = new Annotations.RectangleAnnotation();
        rectangleAnnot.PageNumber = 1;
        // values are in page coordinates with (0, 0) in the top left
        rectangleAnnot.X = 100000;
        rectangleAnnot.Y = 15023123;
        rectangleAnnot.Width = 201232;
        rectangleAnnot.Height = 512320;
        rectangleAnnot.Author = annotManager.getCurrentUser();

        annotManager.addAnnotation(rectangleAnnot);
        // need to draw the annotation otherwise it won't show up until the page is refreshed
        annotManager.redrawAnnotation(rectangleAnnot);
      });
    });
  }, []);

  return (
    <div className="MyComponent">
      <div className="header">React sample</div>
      <div className="webviewer" ref={viewer} style={{ height: '100vh' }}></div>
    </div>
  );
};

export default App;
