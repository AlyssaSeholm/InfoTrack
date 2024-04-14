import React, { FC } from 'react';
import { MyDemoWrapper } from './MyDemo.styled';

interface MyDemoProps {}

const MyDemo: FC<MyDemoProps> = () => (
 <MyDemoWrapper data-testid="MyDemo">
    MyDemo Component
 </MyDemoWrapper>
);

export default MyDemo;
