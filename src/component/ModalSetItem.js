import { Button, Checkbox, Form, Input, Modal } from 'antd';
import { useEffect, useState } from 'react';
const ModalSetItem = ({ isModaSetOpen, setisModaSetOpen, ccolumns, productForEditing }) => {

    const [productInfo, setProductInfo] = useState(productForEditing)

    useEffect(() => {
        setProductInfo(productForEditing)
    }, [productForEditing, isModaSetOpen])
    const showModal = () => {
        setisModaSetOpen(true);
    };
    const handleOk = () => {
        setisModaSetOpen(false);
    };
    const handleCancel = () => {
        setisModaSetOpen(false);
    };
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    console.log(productInfo);
    return (

        <Modal
            title="Set product"
            open={isModaSetOpen}
            onCancel={() => setisModaSetOpen(false)}
            footer={[
                <Button key="cancel" onClick={handleCancel}>
                    Cancel
                </Button>,
                <Button key="submit" type="primary" htmlType="submit" onClick={onFinish} form="formAddItem">
                    Ok
                </Button>,
            ]}
        >
            <Form
                name="basic"
                labelCol={{
                    span: 5,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                id="formAddItem"

            >
                {
                    Object.entries(productInfo).map(([key, value]) =>
                        <Form.Item
                            key={`${key}-${productInfo.id}`}
                            label={key}
                            name={key}
                            value={value}
                            rules={[
                                {
                                    required: true,
                                    message: `Please input your ${key}!`,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>)
                }

            </Form>
        </Modal>

    );
};
export default ModalSetItem;


