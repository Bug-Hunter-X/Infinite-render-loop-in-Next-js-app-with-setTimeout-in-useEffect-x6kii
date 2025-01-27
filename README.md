# Infinite Render Loop in Next.js App

This repository demonstrates a common error in Next.js applications where an infinite render loop occurs due to the improper use of `setTimeout` within a `useEffect` hook. The bug involves a component that updates its state using `setTimeout`, causing the component to re-render repeatedly. 

## Bug Description
The `MyComponent` updates its internal state using `setTimeout` within the `useEffect` hook.  Because the dependency array for `useEffect` includes `count`, any change to the `count` variable will trigger the useEffect again, leading to an endless loop.

## Solution
The solution is to update the dependency array of the `useEffect` hook to an empty array `[]`, preventing it from triggering every time the `count` changes. If you need to trigger the useEffect only once when the component mounts, that is the recommended approach.  Otherwise, you should use a different approach, like using `useCallback` to avoid unnecessary re-renders.