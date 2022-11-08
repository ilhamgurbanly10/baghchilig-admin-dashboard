import {Helmet} from "react-helmet";
import {useState , useEffect} from 'react'
import {useTranslation} from "react-i18next";
import { useDispatch , useSelector } from "react-redux";
import {getAllMembers, addMember, editMember, removeMember, switchStatusMember} from '../redux/reducers/teamMembersSlice';
import { Space, Table, Switch, Popconfirm, notification, Form, Input, Select } from 'antd';
import { SmileOutlined , WarningOutlined} from '@ant-design/icons';


function TeamMembers() {

    const data = useSelector((state) => state.teamMembers);
    const [form] = Form.useForm();
    const {t, i18n} = useTranslation('common');
    let lan = i18n.language;
    const dispatch = useDispatch();
    const locales = ['az','en','de'];
    const [id, setId] = useState(null);
    const [status, setStatus] = useState(true);
    const [selected, setSelected] = useState(0);
    const { Option } = Select;

    const columns = [
      {
        title: t('titles.image'),
        dataIndex: 'img',
        key: 'img',
        render: (text) => <img src={text} style={{width: "100px", height: "auto"}}></img>,
      },
      {
        title: t('titles.name'),
        dataIndex: `name`,
        key: `name`,
      },
      {
        title: t('titles.position'),
        dataIndex: `position_${lan}`,
        key: `position_${lan}`,
      },
      {
        title: "Instagram",
        dataIndex: `instagram`,
        key: `instagram`,
      },
      {
        title: "Twitter",
        dataIndex: `twitter`,
        key: `twitter`,
      },
      {
        title: "Facebook",
        dataIndex: `facebook`,
        key: `facebook`,
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
      const positions = data.positions[selected];
      obj = {...values, position_az: positions.name_az, position_en: positions.name_en, position_de: positions.name_de}
      obj.status = status;
      delete obj.positions;

      dispatch(addMember({...obj}))
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
      let editedData = data.data.find(d => d.id === id);
      const i = data.positions.findIndex((p) => {return p.name_en === editedData.position_en})
      form.resetFields();
      form.setFieldsValue(editedData);
      setSelected(i);
      setStatus(editedData.status);
    }

    const editData = (values) => { 

      let obj = {};
      const positions = data.positions[selected];
      obj = {...values, position_az: positions.name_az, position_en: positions.name_en, position_de: positions.name_de}
      obj.status = status;
      delete obj.positions;
      
      dispatch(editMember({id, data: {...obj}}))
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
      dispatch(switchStatusMember({...editedData, status: e}))
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

      dispatch(removeMember(id))
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
      setSelected(0);
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

    const selectData = (val) => {
      setSelected(val);
    }

    useEffect(()=>{
      dispatch(getAllMembers())
    }, [])

    return (
      <>

        <Helmet>
          <title>{t('titles.pageName')} - {t('menu.item03')}</title>
        </Helmet>

        <Table id="table" columns={columns} dataSource={data.data} />

        <Form
            form={form}
            name="basic"
            className="mt-5 pt-5"
            id="form"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            layout="vertical"
            onFinish={onFinish}
            autoComplete="off"
          > 

          <Form.Item
            className="mt-5"
            label={`${t('titles.image')}`}
            name={`img`}
            rules={[
              {
                required: true,
                message: t('texts.required'),
              },
            ]}
          >
            <Input />
          </Form.Item>

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

          <Form.Item
            className="mt-5"
            label={`Instagram`}
            name={`instagram`}
            rules={[
              {
                required: true,
                message: t('texts.required'),
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
              className="mt-5"
              label={`Twitter`}
              name={`twitter`}
              rules={[
                {
                  required: true,
                  message: t('texts.required'),
                },
              ]}
            >
              <Input />
          </Form.Item>

          <Form.Item
            className="mt-5"
            label={`Facebook`}
            name={`facebook`}
            rules={[
              {
                required: true,
                message: t('texts.required'),
              },
            ]}
          >
            <Input />
          </Form.Item>

        <Form.Item
          name="positions"
          label={`${t('titles.position')}`}
        >
          <Select
            defaultValue={selected}
            onChange={selectData}
            
          > 
            { data.positions?.map((p, i) => (
              <Option key={i} value={i}>{p[`name_${lan}`]}</Option>
            ))}
          </Select>
        </Form.Item>

          <Form.Item label="Status" className="mt-5" valuePropName="status">
            <Switch checked={status} onChange={(e) => { setStatus(e) }} />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 0,
              span: 16,
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
  
export default TeamMembers;