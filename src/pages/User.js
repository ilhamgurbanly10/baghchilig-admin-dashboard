import {Helmet} from "react-helmet";
import {useState , useEffect} from 'react'
import {useTranslation} from "react-i18next";
import { useDispatch , useSelector } from "react-redux";
import {removeUser} from '../redux/reducers/userSlice';
import { Space, Table, Switch, Popconfirm, notification, Form, Input, Avatar, Card, Image } from 'antd';
import { SmileOutlined , CheckCircleFilled, WarningOutlined, EditOutlined, EllipsisOutlined, DeleteOutlined} from '@ant-design/icons';

const { Meta } = Card;

const User = () => {

    const data = useSelector((state) => state.user);
    const [form] = Form.useForm();
    const {t, i18n} = useTranslation('common');
    let lan = i18n.language;
    const dispatch = useDispatch();
    const [status, setStatus] = useState(true);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [showRest, setShowRest] = useState(false);
    
    const onFinish = (values) => {
      editData(values);
      empty();  
    };

    // const startEditing = (id) => {
    //   setId(id)
    //   let editedData = data.data.find(d => d.id === id)
    //   form.setFieldsValue(editedData)
    //   setStatus(editedData.status);
    // }

    const editData = (values) => { 

      let obj = {};
      obj = {...values}
      obj.status = status;
      // dispatch(edit({id: data.data[0].id, data: {...obj}}))
      // .unwrap()
      // .then((originalPromiseResult) => {
      //   successNotification("edit");
      // })
      // .catch((rejectedValueOrSerializedError) => {
      //   errorNotification();
      // })

    }

    // const changeStatus = (e, id) => {

    //   let editedData = data.data.find(d => d.id === id)
    //   dispatch(switchStatus({...editedData, status: e}))
    //   .unwrap()
    //   .then((originalPromiseResult) => {
    //     successNotification("edit");
    //   })
    //   .catch((rejectedValueOrSerializedError) => {
    //     errorNotification();
    //   })
    //   empty();

    // }

    const removeData = () => {

      dispatch(removeUser(data.data[0].id))
      .unwrap()
      .then((originalPromiseResult) => {
        successNotification("remove");
      })
      .catch((rejectedValueOrSerializedError) => {
        errorNotification();
      })

    }

    const empty = () => {
      form.resetFields();
      setStatus(true);
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

    useEffect(()=>{

    }, [])

    return (
      <>

        <Helmet>
          <title>{t('titles.pageName')} - {t('titles.user')}</title>
        </Helmet>

        <h6>{`${t('titles.user')} - ${data.data[0].first_name} ${data.data[0].last_name}`}</h6>

        <Card
          className="mt-5"
          style={{
            width: 300,
          }}
          cover={
            <Image
              alt="Wallpaper"
              src={data.data[0].wallpaper}
            />
          }
          actions={[

            <EditOutlined key="edit" onClick={() => {setShowForm(!showForm)}}/>,

            <Popconfirm
              title={t('texts.confirmationMessage')}
              onConfirm={() => { removeData() }}
              okText={t('texts.yes')}
              cancelText={t('texts.no')}
            >
              <DeleteOutlined key="delete" />
            </Popconfirm>,

            <EllipsisOutlined key="ellipsis" onClick={() => {setShowRest(!showRest)}}/>
            
          ]}
        >
          <Meta
            avatar={<div className="rounded-pill overflow-hidden"><Image style={{width: "auto", height: "35px"}} src={data.data[0].avatar} /></div>}
            title={`${data.data[0].first_name} ${data.data[0].last_name}`}
            description={`${t('titles.email')}: ${data.data[0].email}`}
          />
        </Card>

        <div className={`mt-5 ${!showRest && 'd-none'}`}>
            
            <p className="my-3">
                <strong className="me-1">{t('titles.password')}: </strong>{data.data[0].password}
            </p>
            
            <p className="my-3">
                <strong className="me-1">{t('titles.position')}: </strong>{data.data[0][`position_${lan}`]}
            </p>

            <p className="my-3">
                <strong className="me-1">Status: </strong>{data.data[0].status ? t('titles.active') : t('titles.deactive')}
            </p>

        </div>


        <Form
            form={form}
            name="basic"
            className={`mt-5 pt-5 w-65 ${!showForm && 'd-none'}`}
            id="form"
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
              label={`${t('titles.name')}`}
              name={`name`}
              rules={[
                {
                  required: true,
                  message: t('texts.required'),
                },
              ]}
            >
              <Input />
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
            <button className={`btn btn-success w-100 mt-4 py-2`} htmlType="submit">
                {t('buttons.edit')}
            </button>

            <button className={`btn btn-danger w-100 mt-4 py-2 mt-4`} htmlType="button" onClick={() => { empty() }}>
                {t('buttons.reset')}
            </button>

          </Form.Item>

        </Form>

      </>  
    );

}
  
export default User;