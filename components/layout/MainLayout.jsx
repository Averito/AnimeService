import { Breadcrumb, Layout, Menu } from "antd"
import { HomeOutlined } from "@ant-design/icons"
import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"

import { getRoutesArray } from "../../helpers/getRoutesArray"
import { getBreadcrumbName } from "../../helpers/getBreadcrumbName"

const { Header, Content, Footer } = Layout

export const MainLayout = ({children}) => {

  const router = useRouter()

  return (
    <Layout className="layout" style={{minHeight: "100vh"}}>
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key={1}>
            <Link passHref href="/">
              Main
            </Link>
          </Menu.Item>
          <Menu.Item key={2}>
            <Link passHref href="/catalog/1">
              Catalog
            </Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{margin: "10px 0"}}>
          <Breadcrumb.Item>
            <Link passHref href="/">
              <HomeOutlined />
            </Link>
          </Breadcrumb.Item>
          {getRoutesArray(router.asPath).map(route => (
            <React.Fragment key={route}>
              {route.includes("[") || route.includes("]") ? "" : <Breadcrumb.Item>
                <Link passHref href={route}>{decodeURI(getBreadcrumbName(route.split("/").pop())).replaceAll("%2F", "/")}</Link>
              </Breadcrumb.Item>}
            </React.Fragment>
          ))}
        </Breadcrumb>
        <div className="site-layout-content">
          {children}
        </div>
      </Content>
    </Layout>
  )
}