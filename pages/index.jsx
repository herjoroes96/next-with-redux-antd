//Import redux
import { useAppDispatch } from "../redux/hooks";
//Import components antd
import { Flex, Form, Input, Button, Image } from "antd";

export default function Home() {
  const dispatch = useAppDispatch();

  const onFinish = (values) => {
    console.log("Received values:", values);
    // Aquí puedes manejar la lógica de inicio de sesión con los valores recibidos
  };

  return (
    <Flex
      gap="middle"
      vertical
      align="center"
      justify="center"
      className="h-vh-100"
    >
      <Flex className="w-px-300" align="center" vertical>
        <Image
          width={200}
          src="/images/logo.png"
          preview={false}
        />
      </Flex>
      <Flex className="w-px-300">
        <Form
          name="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          size="large"
          className="w-pr-100"
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Por favor ingresa tu nombre de usuario",
              },
            ]}
          >
            <Input placeholder="Nombre de usuario" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              { required: true, message: "Por favor ingresa tu contraseña" },
            ]}
          >
            <Input.Password placeholder="Contraseña" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-pr-100">
              Iniciar sesión
            </Button>
          </Form.Item>
        </Form>
      </Flex>
    </Flex>
  );
}
