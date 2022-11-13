import {Helmet} from "react-helmet";
import {useState , useEffect} from 'react'
import {useTranslation} from "react-i18next";
import { useDispatch , useSelector } from "react-redux";
import {getAllUsers, addOtherUser, editOtherUser, removeOtherUser, switchStatusOtherUser} from '../redux/reducers/usersSlice';
import {logOutUser} from '../redux/reducers/userSlice';
import { Button, Space, Table, Switch, Popconfirm, notification, Form, Input, Modal, Image } from 'antd';
import { CheckCircleFilled , WarningOutlined} from '@ant-design/icons';
import {getRandomString} from '../assets/js/library'

const Users = () => {

    const data = useSelector((state) => state.users);
    const user = useSelector((state) => state.user);
    const isAdmin = user.data[0].isAdmin;
    const userId = user.data[0].id;
    const [form] = Form.useForm();
    const {t, i18n} = useTranslation('common');
    let lan = i18n.language;
    const dispatch = useDispatch();
    const locales = ['az','en','de'];
    const [id, setId] = useState(null);
    const [status, setStatus] = useState(true);
    const [token, setToken] = useState("");
    const [adminStatus, setAdminStatus] = useState(true);
    const [loading, setLoading] = useState(true);

    // modal
    const [modalContent, setModalContent] = useState([]);
    const [open, setOpen] = useState(false);
    const titles = [t('titles.password'),'Token']
    
    const inputs = ['phone','email','address','linkedin','instagram','twitter','facebook']

    const columns = [
      {
        title: t('titles.image'),
        dataIndex: 'avatar',
        key: 'avatar',
        render: (text) => <Image src={text} style={{width: "100px", height: "auto"}}/>,
      }, 
      {
        title: t('titles.firstName'),
        dataIndex: `first_name`,
        key: `first_name`,
      },
      {
        title: t('titles.lastName'),
        dataIndex: `last_name`,
        key: `last_name`,
      },
      {
        title: t('titles.position'),
        dataIndex: `isAdmin`,
        key: `isAdmin`,
        render: (text) => text ? 'Admin' : t('titles.user'),
      },
      {
        title: t('titles.email'),
        dataIndex: `email`,
        key: `email`,
      },
      {
        title: t('titles.wallpaper'),
        dataIndex: 'wallpaper',
        key: 'wallpaper',
        render: (text) => <Image src={text} style={{width: "100px", height: "auto"}}/>,
      },
      {
        title: t('titles.action'),
        key: 'action',
        render: (_, record) => (
          <Space size="middle">
            
            { isAdmin && 
            <button type="button" className="btn btn-primary me-3 ms-3" onClick={() => { showModal([record.password, record.token]) }}>
                {t('titles.rest')} <i className="fa fa-eye ms-1"></i>
            </button>
            }
            
            { isAdmin && 
            <Switch checked={record.status} onChange={(e) => { changeStatus(e, record.id) }} />
            }

            { isAdmin && 
            <a href="#form" onClick={() => { startEditing(record.id); }} className="btn btn-success ms-3 me-3">
                {t('buttons.edit')}
            </a>
            }

            { isAdmin &&  
            <Popconfirm
              className="me-3"
              title={t('texts.confirmationMessage')}
              onConfirm={() => { removeData(record.id) }}
              okText={t('texts.yes')}
              cancelText={t('texts.no')}
            >
              <button type="button" className="btn btn-danger">
                  {t('buttons.delete')}
              </button>
            </Popconfirm>
            }

            {userId === record.id && <CheckCircleFilled  style={{ color: '#1890ff', fontSize: "40px" }} />}       
          
          </Space>
        ),
      },
    ];
    
    const onFinish = (values) => {
      id ? editData(values) : addData(values);
      empty();  
    };
    
    const addData = (values) => {

      let obj = {};
      obj = {...values}
      obj.status = status;
      obj.isAdmin = adminStatus;
      obj.token = getRandomString(30, 50, true);

      dispatch(addOtherUser({...obj}))
      .unwrap()
      .then((originalPromiseResult) => {
        successNotification();
      })
      .catch((rejectedValueOrSerializedError) => {
        errorNotification();
      })

    }

    const startEditing = (id) => {
      setId(id)
      let editedData = data.data.find(d => d.id === id)
      form.setFieldsValue(editedData)
      setStatus(editedData.status);
      setAdminStatus(editedData.isAdmin);
      setToken(editedData.token)
    }

    const editData = (values) => { 

      let obj = {};
      obj = {...values}
      obj.status = status;
      obj.isAdmin = adminStatus;
      obj.token = token;
      dispatch(editOtherUser({id, data: {...obj}}))
      .unwrap()
      .then((originalPromiseResult) => {
        successNotification("edit");
        if (id === userId && !status) dispatch(logOutUser());
      })
      .catch((rejectedValueOrSerializedError) => {
        errorNotification();
      })

    }

    const changeStatus = (e, id) => {
      
      let editedData = data.data.find(d => d.id === id)
      dispatch(switchStatusOtherUser({...editedData, status: e}))
      .unwrap()
      .then((originalPromiseResult) => {
        successNotification("edit");
        if (editedData.id === userId) dispatch(logOutUser());
      })
      .catch((rejectedValueOrSerializedError) => {
        errorNotification();
      })
      empty();

    }

    const removeData = (id) => {

      dispatch(removeOtherUser(id))
      .unwrap()
      .then((originalPromiseResult) => {
        successNotification("remove");
      })
      .catch((rejectedValueOrSerializedError) => {
        errorNotification();
      })
      empty();

    }

    const empty = () => {
      form.resetFields();
      setStatus(true);
      setAdminStatus(true);
      setId(null);
      setToken('');
    };

    const successNotification = (type = "add") => {

      let messagge = "";
      if (type == "edit") messagge = "successfullyChanged";
      else if (type == "remove") messagge = "successfullyDeleted";
      else messagge = "successfullyAdded";

      notification.open({
        message: t(`texts.${messagge}`),
        icon: <CheckCircleFilled style={{ color: '#2fee10' }} />,
      });

    }

    const errorNotification = () => {
      notification.open({
        message: t('texts.errorOccured'),
        icon: <WarningOutlined style={{ color: '#fc0f30' }} />,
      });
    }

    const footerText = () => {
      let text;
      const len = data.data.length;
      if (len === 0) text = t('texts.notPosts');
      else if (len === 1) text = `${len} ${t('texts.post')}`
      else text = `${len} ${t('texts.posts')}`  
      return text;
    }

    const showModal = (content) => {
      setModalContent(content);
      setOpen(true)
    }

    const validateMessages = {
      required: t('texts.required'),
      types: {
        email: t('texts.invalidEmail')
      }
    };

    useEffect(()=>{
      dispatch(getAllUsers())
      .unwrap()
      .then((originalPromiseResult) => {
        setLoading(false);
      })
    }, [])

    return (
      <>

        <Helmet>
          <title>{t('titles.pageName')} - {t('titles.users')}</title>
        </Helmet>

        <Table id="table" title={() => ( <h6>{t('titles.users')}</h6> )} footer={() => footerText() } columns={columns} dataSource={data.data} loading={loading}/>

        {  isAdmin && 
        <Form
            form={form}
            name="basic"
            className="mt-5 pt-5 w-65"
            id="form"
            validateMessages={validateMessages}
            labelCol={{
              span: 24,
            }}
            wrapperCol={{
              span: 24,
            }}
            layout="vertical"
            onFinish={onFinish}
            autoComplete="off"
          > 

<Form.Item
            className="mt-5"
            label={`${t('titles.image')}`}
            name={`avatar`}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            className="mt-5"
            label={`${t('titles.wallpaper')}`}
            name={`wallpaper`}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            className="mt-5"
            label={`${t('titles.email')}`}
            name={`email`}
            rules={[
              {
                required: true,
                type: 'email',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            className="mt-5"
            label={`${t('titles.firstName')}`}
            name={`first_name`}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            className="mt-5"
            label={`${t('titles.lastName')}`}
            name={`last_name`}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
              label={t('titles.password')}
              name="password"
              className="mt-5"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input.Password />
          </Form.Item>
          
          <Form.Item label={t('titles.isAdmin')} className="mt-5" valuePropName="isAdmin">
            <Switch checked={adminStatus} onChange={(e) => { setAdminStatus(e) }} />
          </Form.Item> 

          <Form.Item label="Status" className="mt-5" valuePropName="status">
            <Switch checked={status} onChange={(e) => { setStatus(e) }} />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 0,
              span: 24,
            }}
          > 
            <Button className={`w-100 mt-4`} type="primary" htmlType="submit">
              { id ? t('buttons.edit') : t('buttons.add')}
            </Button>

            <Button className={`w-100 mt-4 mt-4`} type="primary" danger htmlType="button" onClick={() => { empty() }}>
                {t('buttons.reset')}
            </Button>

          </Form.Item>

        </Form>

        }

        <Modal
            className="ant-modal-no-footer ant-modal-img"
            title={t('titles.rest')}
            centered
            open={open}
            onOk={() => setOpen(false)}
            onCancel={() => setOpen(false)}
            width={1000}
          > 
            { modalContent?.map((c, i) => (
              <>
                <p key={i} className={`${i > 0 && 'mt-4'}`}>
                  <strong className="me-1">{titles[i]}: </strong> {c}
                </p>
              </>
            ))}

        </Modal>

      </>  
    );

}
  
export default Users;