import React from 'react';
import { Typography, Card, Row } from 'antd';

const About = () => {
    return (
    <>
            <br></br><br></br>
            <Typography.Title level={2}  justify="center" align="middle">About Us</Typography.Title>
            <Typography justify="center" align="middle">Learn more about our company and what we stand for</Typography>
            <br></br><br></br>
            <Row gutter={16} justify="center" align="middle">
            <Card justify="center" align="middle"  style={{ width: 400, height: 380, margin: '10px',  borderColor: "black" }}>
                <Typography.Title level={2}>Our Story</Typography.Title>
                <br></br><br></br>
                <Typography.Paragraph>
                    We started our company with a simple goal in mind: to provide high-quality products at affordable prices. Our passion for innovation and customer satisfaction has driven us to where we are today, and we're proud to be a trusted name in the industry.
                </Typography.Paragraph>
            </Card>
            <Card justify="center" align="middle"  style={{ width: 400, height: 380, margin: '10px' ,  borderColor: "black"}}>
            <Typography.Title level={2}>Our Products</Typography.Title>
            <br></br><br></br>
            <Typography.Paragraph>
                We offer a wide range of products, from clothing and accessories to home goods and electronics. All of our products are carefully selected to ensure they meet our high standards for quality, design, and value. Whether you're looking for a new outfit, the latest tech, or something to spruce up your home, we've got you covered.
            </Typography.Paragraph>
            </Card>
            <Card justify="left" align="middle"  style={{ width: 400, height: 380, margin: '10px',  borderColor: "black" }}>
                <Typography.Title level={2}>Our Team</Typography.Title>
                <br></br><br></br>
                <Typography.Paragraph>
                    Our team is made up of experts in their respective fields, from product development and design to marketing and customer service. We work hard every day to provide you with the best possible shopping experience, and we're always here to help with any questions or concerns you may have.
                </Typography.Paragraph>
                </Card>
                </Row>
            </>


            );
};

            export default About;
