import {Helmet} from "react-helmet";
import {useState , useEffect} from 'react'
import {useTranslation} from "react-i18next";
import { useDispatch , useSelector } from "react-redux";
import {getAllShoppingCategories, addShoppingCategory, editShoppingCategory, removeShoppingCategory, switchStatusShoppingCategory} from '../redux/reducers/shoppingCategoriesSlice';
import { Space, Table, Switch, Popconfirm, notification, Form, Input   } from 'antd';
import { SmileOutlined , WarningOutlined} from '@ant-design/icons';


const ShoppingCategories = () => {

    const data = useSelector((state) => state.shoppingCategories);
    const [form] = Form.useForm();
    const {t, i18n} = useTranslation('common');
    let lan = i18n.language;
    const dispatch = useDispatch();
    const locales = ['az','en','de'];
    const [id, setId] = useState(null);
    const [status, setStatus] = useState(true);
    const [loading, setLoading] = useState(true);

    const columns = [
      {
        title: t('titles.name'),
        dataIndex: `name_${lan}`,
        key: `name_${lan}`,
      },
      {
        title: t('titles.action'),
        key: 'action',
        render: (_, record) => (
          <Space size="middle">
            
            <Switch checked={record.status} onChange={(e) => { changeStatus(e, record.id) }} />

            <a href="#form" onClick={() => { startEditing(record.id); }} className="btn btn-success ms-3 me-3">
                {t('buttons.edit')}
            </a>

            <Popconfirm
              title={t('texts.confirmationMessage')}
              onConfirm={() => { removeData(record.id) }}
              okText={t('texts.yes')}
              cancelText={t('texts.no')}
            >
              <button type="button" className="btn btn-danger">
                  {t('buttons.delete')}
              </button>
            </Popconfirm>
          
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

      dispatch(addShoppingCategory({...obj}))
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
    }

    const editData = (values) => { 

      let obj = {};
      obj = {...values}
      obj.status = status;
      dispatch(editShoppingCategory({id, data: {...obj}}))
      .unwrap()
      .then((originalPromiseResult) => {
        successNotification("edit");
      })
      .catch((rejectedValueOrSerializedError) => {
        errorNotification();
      })

    }

    const changeStatus = (e, id) => {

      let editedData = data.data.find(d => d.id === id)
      dispatch(switchStatusShoppingCategory({...editedData, status: e}))
      .unwrap()
      .then((originalPromiseResult) => {
        successNotification("edit");
      })
      .catch((rejectedValueOrSerializedError) => {
        errorNotification();
      })
      empty();

    }

    const removeData = (id) => {

      dispatch(removeShoppingCategory(id))
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
      setId(null);
    };

    const successNotification = (type = "add") => {

      let messagge = "";
      if (type == "edit") messagge = "successfullyChanged";
      else if (type == "remove") messagge = "successfullyDeleted";
      else messagge = "successfullyAdded";

      notification.open({
        message: t(`texts.${messagge}`),
        icon: <SmileOutlined style={{ color: '#108ee9' }} />,
      });

    }

    const errorNotification = () => {
      notification.open({
        message: t('texts.errorOccured'),
        icon: <WarningOutlined style={{ color: '#108ee9' }} />,
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

    useEffect(()=>{
      dispatch(getAllShoppingCategories())
      .unwrap()
      .then((originalPromiseResult) => {
        setLoading(false);
      })
    }, [])

    return (
      <>

        <Helmet>
          <title>{t('titles.pageName')} - {t('menu.item09')}</title>
        </Helmet>

        <Table id="table" title={() => ( <h6>{t('menu.item09')}</h6> )} footer={() => footerText() } columns={columns} dataSource={data.data} loading={loading}/>

        <Form
            form={form}
            name="basic"
            className="mt-5 pt-5 w-65"
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

          { locales.map((l, i) => ( 

            <Form.Item
              className="mt-5"
              key={i}
              label={`${t('titles.name')} - ${l.toUpperCase()}`}
              name={`name_${l}`}
              rules={[
                {
                  required: true,
                  message: t('texts.required'),
                },
              ]}
            >
              <Input />
            </Form.Item>

          ))}

          <Form.Item label="Status" className="mt-5" valuePropName="status">
            <Switch checked={status} onChange={(e) => { setStatus(e) }} />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 0,
              span: 24,
            }}
          >
            <button className={`btn btn-${id ? 'success' : 'primary'} w-100 mt-4 py-2`} htmlType="submit">
                { id ? t('buttons.edit') : t('buttons.add')}
            </button>

            <button className={`btn btn-danger w-100 mt-4 py-2 mt-4`} htmlType="button" onClick={() => { empty() }}>
                {t('buttons.reset')}
            </button>

          </Form.Item>

        </Form>

      </>  
    );

}
  
export default ShoppingCategories;