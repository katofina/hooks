// This hook allows to run effects synchronously with rendering of component,
// that allowed to manipulate components before platform will display changes on the screen.
// By contrast with useEffect, that is executed asynchronously after rendering,
// useLayoutEffect starts synchronously right after all changes in components,
// but before the screen will be rendered.
// It can be usefull when you needed to calculate sizes of components or make other actions,
// that shoul be executed before the user sees changes.

//import {useState, useRef, useLayoutEffect} from "react";
// import {View, Text} from "react-native";

function UseLayoutEffect() {
  const [layout, setLayout] = useState(null);

  const viewRef = useRef(null);

  useLayoutEffect(() => {
    if (viewRef.current) {
      viewRef.current.measure((x: number , y: number, width: number, height: number, pageX: number, pageY: number) => {
        setLayout({x, y, width, height})
      });
    }
  }, []); // empty array - will be executed only once for mounting of component

  return (
    <View ref={viewRef}>
      <Text>Sizes of component: </Text>
      {layout ? (
        <Text>{`X: ${layout.x}, Y: ${layout.y}, Width: ${layout.width}, Height: ${layout.height}`}</Text>
      ): (
        <Text>Loading...</Text>
      )}
    </View>
  )
}

// Excessive use of useLayoutEffect can affect on perfomance,
// becuse synchronous executing blocks rendering before finishing of executing of effect.
