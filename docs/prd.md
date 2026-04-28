# ComplexCurve Converter - 完整软件规格说明与 README

## 1. 项目概述

### 1.1 项目名称

**ComplexCurve Converter**

### 1.2 项目类型

为大学软件工程项目设计的全栈教育 Web 应用

### 1.3 项目目的

ComplexCurve Converter 是一个综合性 Web 平台，使学生和教育工作者能够将函数形式的方程 y = f(x) 从笛卡尔坐标形式转换为复变量形式。平台提供用户认证、个人仪表板、转换历史记录跟踪以及用于用户管理和活动监控的管理工具。

### 1.4 目标用户

- 学习解析几何和复分析的大学生
- 数学教育工作者
- 从事复平面变换研究的研究人员
- 管理平台的系统管理员

### 1.5 默认平台语言

乌兹别克语（支持俄语和英语多语言）

---

## 2. 问题陈述

学习解析几何的学生在手动将函数形式的方程从笛卡尔形式转换为复数形式时经常遇到困难。此过程涉及：

- 理解复数理论
- 正确应用替换公式
- 执行无误的代数运算
- 通过多个步骤验证结果

当前解决方案缺乏：

- 逐步转换可视化
- 学习进度的个人历史记录跟踪
- 可访问的基于 Web 的界面
- 具有基于角色访问的多用户支持

---

## 3. 解决方案概述

ComplexCurve Converter 通过提供以下功能解决这些挑战：

- 具有数学准确性的自动方程转换
- 清晰的逐步转换显示
- 用户认证和个性化仪表板
- 每个用户的转换历史记录存储
- 平台管理的管理面板
- 所有设备的响应式设计
- 多语言界面（乌兹别克语、俄语、英语）

---

## 4. 核心功能

### 4.1 认证系统

- 带电子邮件验证的用户注册
- 带会话管理的安全登录
- 密码重置功能
- 基于角色的访问控制（用户/管理员）

### 4.2 方程转换器

- 函数形式 y = f(x) 的输入验证
- 从笛卡尔形式到复数形式的实时转换
- 逐步转换显示
- 支持各种函数类型（多项式、三角函数、指数函数等）
- 复制和保存转换结果

### 4.3 用户仪表板

- 带用户统计信息的欢迎部分
- 最近转换概览
- 快速访问转换器工具
- 转换历史记录管理
- 个人资料设置

### 4.4 管理面板

- 用户管理（查看、搜索、筛选、停用）
- 平台活动监控
- 所有用户的转换统计信息
- 系统概览仪表板

### 4.5 多语言支持

- 语言切换器（乌兹别克语/俄语/英语）
- 本地化 UI 文本和内容
- 持久化语言偏好

---

## 5. MVP 范围

### 阶段 1 - 核心功能

- 用户注册和登录
- 基本方程转换器（函数形式）
- 带转换历史记录的用户仪表板
- 个人资料管理
- 管理员用户列表视图

### 阶段 2 - 增强功能

- 逐步转换显示
- 保存和复制转换结果
- 管理员活动监控
- 搜索和筛选功能

### 阶段 3 - 完善

- 多语言支持
- 深色模式切换
- 图形可视化（可选）
- Toast 通知
- 加载状态

---

## 6. 未来范围

- 支持更高阶函数
- 3D 曲线变换
- 将转换历史记录导出为 PDF
- 协作功能（共享转换）
- 移动原生应用
- 与学习管理系统集成
- 带交互式控件的高级图形绘制
- LaTeX 方程输入支持
- 批量转换处理
- 扩展支持：圆锥曲线（圆、椭圆、抛物线、双曲线）的二阶形式转换

---

## 7. 用户角色和权限矩阵

| 功能               | 访客 | 用户 | 管理员 |
| ------------------ | ---- | ---- | ------ |
| 查看着陆页         | ✓    | ✓    | ✓      |
| 注册账户           | ✓    | -    | -      |
| 登录               | ✓    | ✓    | ✓      |
| 使用转换器         | -    | ✓    | ✓      |
| 保存转换历史记录   | -    | ✓    | ✓      |
| 查看自己的历史记录 | -    | ✓    | ✓      |
| 编辑个人资料       | -    | ✓    | ✓      |
| 查看所有用户       | -    | -    | ✓      |
| 管理用户           | -    | -    | ✓      |
| 查看平台活动       | -    | -    | ✓      |
| 访问管理面板       | -    | -    | ✓      |

---

## 8. 功能需求

### 8.1 用户注册

- FR-001：系统应允许新用户使用电子邮件、全名和密码创建账户
- FR-002：系统应验证电子邮件格式和密码强度
- FR-003：系统应在注册期间要求密码确认
- FR-004：系统应要求接受条款和隐私政策
- FR-005：系统应防止重复电子邮件注册

### 8.2 用户认证

- FR-006：系统应使用电子邮件和密码对用户进行身份验证
- FR-007：系统应在登录后维护安全会话
- FR-008：系统应在成功登录后将用户重定向到仪表板
- FR-009：系统应在成功登录后将管理员重定向到管理面板
- FR-010：系统应提供注销功能
- FR-011：系统应提供忘记密码 UI
- FR-012：系统应提供重置密码 UI

### 8.3 方程转换

- FR-013：系统应接受函数形式 y = f(x) 的方程作为输入
- FR-014：系统应在转换前验证方程格式
- FR-015：系统应使用复变量替换公式转换方程：
  - z = x + iy
  - z̄ = x - iy
  - x = (z + z̄)/2
  - y = (z - z̄)/(2i)
  - 输出形式：(z - z̄)/(2i) = f((z + z̄)/2)
- FR-016：系统应显示原始方程、替换公式、逐步转换和最终结果
- FR-017：系统应提供各种函数类型的示例方程（多项式、三角函数、指数函数等）
- FR-018：系统应允许用户复制转换结果
- FR-019：系统应允许用户将转换结果保存到历史记录
- FR-020：系统应提供清除按钮以重置转换器输入

### 8.4 转换历史记录

- FR-021：系统应存储每个保存的转换，包括用户 ID、原始方程、转换结果和时间戳
- FR-022：系统应按时间顺序显示用户的转换历史记录
- FR-023：系统应允许用户仅查看自己的转换历史记录
- FR-024：系统应在用户仪表板上显示最近的转换

### 8.5 用户仪表板

- FR-025：系统应显示带用户姓名的欢迎消息
- FR-026：系统应显示快速统计信息（总转换次数、最近活动）
- FR-027：系统应提供转换器的快速访问按钮
- FR-028：系统应显示最近转换预览
- FR-029：系统应提供到转换器、历史记录和个人资料页面的导航

### 8.6 用户个人资料

- FR-030：系统应允许用户查看其个人资料信息
- FR-031：系统应允许用户编辑其姓名和电子邮件
- FR-032：系统应允许用户更改密码
- FR-033：系统应显示用户的账户角色
- FR-034：系统应提供深色模式切换
- FR-035：系统应提供语言切换器

### 8.7 管理面板

- FR-036：系统应仅限管理员角色访问管理面板
- FR-037：系统应显示概览仪表板，包括总用户数、总转换次数和活跃用户数
- FR-038：系统应显示所有注册用户的列表
- FR-039：系统应允许管理员按姓名或电子邮件搜索用户
- FR-040：系统应允许管理员按角色或状态筛选用户
- FR-041：系统应显示用户详细信息，包括注册日期、角色和活动计数
- FR-042：系统应提供停用/阻止用户的 UI
- FR-043：系统应提供删除用户的 UI
- FR-044：系统应提供编辑用户角色的 UI
- FR-045：系统应显示所有用户的转换历史记录
- FR-046：系统应允许管理员按用户或日期筛选转换
- FR-047：系统应显示最常用的示例方程
- FR-048：系统应显示最近的平台活动日志

### 8.8 多语言支持

- FR-049：系统应支持乌兹别克语、俄语和英语
- FR-050：系统应默认为乌兹别克语
- FR-051：系统应允许用户从任何页面切换语言
- FR-052：系统应在会话之间保持语言偏好

---

## 9. 非功能需求

### 9.1 性能

- NFR-001：方程转换应在 2 秒内完成
- NFR-002：在标准宽带上，页面加载时间不应超过 3 秒
- NFR-003：系统应支持至少 100 个并发用户
- NFR-004：数据库查询应在 500 毫秒内执行

### 9.2 安全性

- NFR-005：密码应使用 bcrypt 进行哈希处理，最少 10 个盐轮次
- NFR-006：用户会话应在 24 小时不活动后过期
- NFR-007：管理员路由应使用基于角色的中间件进行保护
- NFR-008：所有表单输入应进行验证和清理
- NFR-009：认证端点应实施速率限制（每 15 分钟 5 次尝试）
- NFR-010：系统应记录所有管理员操作以进行审计跟踪

### 9.3 可用性

- NFR-011：界面应在移动设备、平板电脑和桌面上完全响应
- NFR-012：系统应为无效输入提供清晰的错误消息
- NFR-013：系统应为异步操作显示加载状态
- NFR-014：系统应在没有数据可用时提供空状态
- NFR-015：导航应直观，最多 3 次点击即可访问任何功能

### 9.4 可靠性

- NFR-016：系统正常运行时间应至少为 99%
- NFR-017：系统应在不崩溃的情况下处理无效方程输入
- NFR-018：系统应优雅地处理数据库连接失败

### 9.5 可维护性

- NFR-019：代码应遵循一致的样式指南
- NFR-020：系统应使用基于组件的架构
- NFR-021：数据库架构应支持轻松迁移和版本控制

---

## 10. 系统架构

### 10.1 架构模式

**三层架构：**

- **表示层：** 基于 React 的前端，具有响应式 UI
- **应用层：** 带 RESTful API 的 Node.js 后端
- **数据层：** PostgreSQL 关系数据库

### 10.2 架构图（概念）

```
┌─────────────────────────────────────────┐
│         客户端浏览器                     │
│  (React + Tailwind CSS + Shadcn)       │
└──────────────┬──────────────────────────┘
               │ HTTPS
               ▼
┌─────────────────────────────────────────┐
│         API 网关 / 负载均衡器            │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│      应用服务器                          │
│      (Node.js + Express)                │
│  ┌─────────────────────────────────┐   │
│  │  认证服务                        │   │
│  │  转换引擎服务                    │   │
│  │  用户管理服务                    │   │
│  │  管理服务                        │   │
│  └─────────────────────────────────┘   │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│      数据库服务器                        │
│      (PostgreSQL)                       │
│  ┌─────────────────────────────────┐   │
│  │  用户表                          │   │
│  │  转换历史记录表                  │   │
│  │  系统活动表                      │   │
│  └─────────────────────────────────┘   │
└─────────────────────────────────────────┘
```

---

## 11. 推荐技术栈

### 11.1 前端

- **框架：** React 18+
- **样式：** Tailwind CSS + Shadcn UI 组件
- **状态管理：** React Context API 或 Zustand
- **路由：** React Router v6
- **HTTP 客户端：** Axios
- **表单处理：** React Hook Form
- **验证：** Zod
- **国际化：** react-i18next
- **数学渲染：** KaTeX 或 MathJax（可选）
- **通知：** React Hot Toast

### 11.2 后端

- **运行时：** Node.js 18+
- **框架：** Express.js
- **语言：** TypeScript
- **认证：** JWT (jsonwebtoken)
- **密码哈希：** bcrypt
- **验证：** Zod
- **ORM：** Prisma
- **API 文档：** Swagger/OpenAPI（可选）

### 11.3 数据库

- **数据库：** PostgreSQL 14+
- **迁移工具：** Prisma Migrate

### 11.4 DevOps 和部署

- **版本控制：** Git + GitHub
- **容器：** Docker
- **托管：** Vercel（前端）+ Railway/Render（后端）
- **环境管理：** dotenv

### 11.5 测试

- **单元测试：** Jest
- **集成测试：** Supertest
- **E2E 测试：** Playwright（可选）

---

## 12. 前端架构

### 12.1 组件结构

```
src/
├── components/
│   ├── common/
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Card.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Sidebar.tsx
│   │   ├── LoadingSpinner.tsx
│   │   ├── EmptyState.tsx
│   │   └── Toast.tsx
│   ├── auth/
│   │   ├── LoginForm.tsx
│   │   ├── RegisterForm.tsx
│   │   ├── ForgotPasswordForm.tsx
│   │   └── ResetPasswordForm.tsx
│   ├── converter/
│   │   ├── FunctionInput.tsx
│   │   ├── ExampleButtons.tsx
│   │   ├── ConversionResult.tsx
│   │   ├── StepByStep.tsx
│   │   └── GraphVisualization.tsx
│   ├── dashboard/
│   │   ├── WelcomeCard.tsx
│   │   ├── StatsCard.tsx
│   │   ├── RecentConversions.tsx
│   │   └── QuickActions.tsx
│   ├── history/
│   │   ├── HistoryList.tsx
│   │   └── HistoryItem.tsx
│   ├── profile/
│   │   ├── ProfileInfo.tsx
│   │   ├── EditProfileForm.tsx
│   │   └── ChangePasswordForm.tsx
│   └── admin/
│       ├── UserTable.tsx
│       ├── UserRow.tsx
│       ├── ActivityLog.tsx
│       ├── StatsOverview.tsx
│       └── SearchFilter.tsx
├── pages/
│   ├── public/
│   │   ├── LandingPage.tsx
│   │   ├── LoginPage.tsx
│   │   ├── RegisterPage.tsx
│   │   └── ForgotPasswordPage.tsx
│   ├── user/
│   │   ├── DashboardPage.tsx
│   │   ├── ConverterPage.tsx
│   │   ├── HistoryPage.tsx
│   │   └── ProfilePage.tsx
│   └── admin/
│       ├── AdminDashboardPage.tsx
│       ├── UsersPage.tsx
│       ├── ActivityPage.tsx
│       └── SettingsPage.tsx
├── contexts/
│   ├── AuthContext.tsx
│   ├── ThemeContext.tsx
│   └── LanguageContext.tsx
├── hooks/
│   ├── useAuth.ts
│   ├── r.ts
│   ├── useHistory.ts
│   └── useAdmin.ts
├── services/
│   ├── api.ts
│   ├── authService.ts
│   ├── converterService.ts
│   ├── historyService.ts
│   └── adminService.ts
├── utils/
│   ├── validation.ts
│   ├── formatters.ts
│   └── constants.ts
├── types/
│   ├── user.ts
│   ├── conversion.ts
│   └── api.ts
├── i18n/
│   ├── uz.json
│   ├── ru.json
│   └── en.json
└── App.tsx
```

### 12.2 路由结构

```typescript
// 公共路由
/                    → LandingPage
/login               → LoginPage
/register            → RegisterPage
/forgot-password     → ForgotPasswordPage

// 受保护的用户路由
/dashboard           → DashboardPage
/dashboard/converter → ConverterPage
/dashboard/history   → HistoryPage
/dashboard/profile   → ProfilePage

// 受保护的管理员路由
/admin               → AdminDashboardPage
/admin/users         → UsersPage
/admin/activity      → ActivityPage
/admin/settings      → SettingsPage
```

---

## 13. 后端架构

### 13.1 项目结构

```
backend/
├── src/
│   ├── controllers/
│   │   ├── authController.ts
│   │   ├── converterController.ts
│   │   ├── historyController.ts
│   │   ├── userController.ts
│   │   └── adminController.ts
│   ├── middleware/
│   │   ├── authMiddleware.ts
│   │   ├── roleMiddleware.ts
│   │   ├── validationMiddleware.ts
│   │   ├── errorHandler.ts
│   │   └── rateLimiter.ts
│   ├── routes/
│   │   ├── authRoutes.ts
│   │   ├── converterRoutes.ts
│   │   ├── historyRoutes.ts
│   │   ├── userRoutes.ts
│   │   └── adminRoutes.ts
│   ├── services/
│   │   ├── authService.ts
│   │   ├── conversionEngine.ts
│   │   ├── historyService.ts
│   │   ├── userService.ts
│   │   └── adminService.ts
│   ├── utils/
│   │   ├── jwt.ts
│   │   ├── bcrypt.ts
│   │   ├── validators.ts
│   │   └── logger.ts
│   ├── types/
│   │   ├── express.d.ts
│   │   └── models.ts
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── migrations/
│   ├── config/
│   │   ├── database.ts
│   │   └── environment.ts
│   └── app.ts
├── tests/
│   ├── unit/
│   └── integration/
├── .env.example
├── package.json
└── tsconfig.json
```

---

## 14. 认证和授权流程

### 14.1 注册流程

1. 用户提交注册表单（电子邮件、全名、密码、确认密码）
2. 前端验证输入（电子邮件格式、密码强度、密码匹配）
3. 后端在 POST /api/auth/register 接收请求
4. 后端再次验证输入
5. 后端检查电子邮件是否已存在
6. 后端使用 bcrypt 对密码进行哈希处理
7. 后端创建用户记录，role='user' 和 isActive=true
8. 后端返回成功响应
9. 前端重定向到登录页面

### 14.2 登录流程

1. 用户提交登录表单（电子邮件、密码）
2. 前端验证输入
3. 后端在 POST /api/auth/login 接收请求
4. 后端通过电子邮件查找用户
5. 后端使用 bcrypt 比较密码哈希
6. 后端检查用户是否 isActive
7. 后端生成带 userId 和 role 的 JWT 令牌
8. 后端返回令牌和用户数据
9. 前端将令牌存储在 localStorage/sessionStorage 中
10. 前端根据角色重定向：
    - 用户 → /dashboard
    - 管理员 → /admin

### 14.3 受保护路由访问

1. 用户尝试访问受保护路由
2. 前端检查令牌是否存在
3. 前端在 Authorization 标头中包含令牌
4. 后端中间件验证 JWT 令牌
5. 后端中间件从令牌中提取 userId 和 role
6. 后端中间件检查路由权限
7. 如果授权，请求继续到控制器
8. 如果未授权，后端返回 401/403 错误

### 14.4 注销流程

1. 用户点击注销按钮
2. 前端从存储中删除令牌
3. 前端重定向到着陆页
4. （可选）后端可以维护令牌黑名单

---

## 15. 数据库设计

### 15.1 Prisma 架构

```prisma
generator client {
  provider = \"prisma-client-js\"
}

datasource db {
  provider = \"postgresql\"
  url      = env(\"DATABASE_URL\")
}

model User {
  id                String              @id @default(uuid())
  email             String              @unique
  fullName          String
  username          String?             @unique
  passwordHash      String
  role              Role                @default(USER)
  isActive          Boolean             @default(true)
  createdAt         DateTime            @default(now())
  updatedAt         DateTime            @updatedAt
  conversions       ConversionHistory[]
  activities        SystemActivity[]

  @@map(\"users\")
}

model ConversionHistory {
  id                  String   @id @default(uuid())
  userId              String
  user                User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  originalEquation    String
  transformedEquation String
  steps               String   @db.Text
  createdAt           DateTime @default(now())

  @@map(\"conversion_history\")
  @@index([userId])
  @@index([createdAt])
}

model SystemActivity {
  id          String   @id @default(uuid())
  userId      String?
  user        User?    @relation(fields: [userId], references: [id], onDelete: SetNull)
  actionType  String
  description String
  createdAt   DateTime @default(now())

  @@map(\"system_activity\")
  @@index([userId])
  @@index([createdAt])
}

enum Role {
  USER
  ADMIN
}
```

### 15.2 实体关系

- **User** (1) → (N) **ConversionHistory**：一个用户可以有多个转换记录
- **User** (1) → (N) **SystemActivity**：一个用户可以有多个活动日志
- **ConversionHistory** 属于一个 **User**
- **SystemActivity** 可选地属于一个 **User**（对于系统级操作可为空）

### 15.3 数据库索引

- `users.email`（用于快速登录查找的唯一索引）
- `users.username`（如果使用用户名，则为唯一索引）
- `conversion_history.userId`（用于用户历史记录查询的索引）
- `conversion_history.createdAt`（用于按时间顺序排序的索引）
- `system_activity.userId`（用于用户活动筛选的索引）
- `system_activity.createdAt`（用于最近活动查询的索引）

---

## 16. API 设计概述

### 16.1 API 基础 URL

```
开发环境：http://localhost:5000/api
生产环境：https://api.complexcurve.com/api
```

### 16.2 认证

所有受保护的端点都需要在 Authorization 标头中包含 JWT 令牌：

```
Authorization: Bearer <token>
```

### 16.3 响应格式

**成功响应：**

```json
{
  \"success\": true,
  \"data\": { ... },
  \"message\": \"操作成功\"
}
```

**错误响应：**

```json
{
  \"success\": false,
  \"error\": \"错误消息\",
  \"code\": \"ERROR_CODE\"
}
```

---

## 17. 建议的 REST API 端点

### 17.1 认证端点

#### POST /api/auth/register

**描述：** 注册新用户账户

**请求正文：**

```json
{
  \"email\": \"user@example.com\",
  \"fullName\": \"John Doe\",
  \"password\": \"SecurePass123!\",
  \"confirmPassword\": \"SecurePass123!\",
  \"acceptTerms\": true
}
```

**响应 (201)：**

```json
{
  \"success\": true,
  \"message\": \"注册成功\"
}
```

#### POST /api/auth/login

**描述：** 对用户进行身份验证并返回 JWT 令牌

**请求正文：**

```json
{
  \"email\": \"user@example.com\",
  \"password\": \"SecurePass123!\"
}
```

**响应 (200)：**

```json
{
  \"success\": true,
  \"data\": {
    \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...\",
    \"user\": {
      \"id\": \"uuid\",
      \"email\": \"user@example.com\",
      \"fullName\": \"John Doe\",
      \"role\": \"USER\"
    }
  }
}
```

#### POST /api/auth/logout

**描述：** 注销用户（可选令牌黑名单）

**标头：** Authorization: Bearer <token>

**响应 (200)：**

```json
{
  \"success\": true,
  \"message\": \"注销成功\"
}
```

#### POST /api/auth/forgot-password

**描述：** 请求密码重置（向电子邮件发送重置链接）

**请求正文：**

```json
{
  \"email\": \"user@example.com\"
}
```

**响应 (200)：**

```json
{
  \"success\": true,
  \"message\": \"密码重置链接已发送到电子邮件\"
}
```

#### POST /api/auth/reset-password

**描述：** 使用令牌重置密码

**请求正文：**

```json
{
  \"token\": \"reset-token\",
  \"newPassword\": \"NewSecurePass123!\",
  \"confirmPassword\": \"NewSecurePass123!\"
}
```

**响应 (200)：**

```json
{
  \"success\": true,
  \"message\": \"密码重置成功\"
}
```

### 17.2 转换器端点

#### POST /api/converter/transform

**描述：** 将函数形式的方程从笛卡尔形式转换为复数形式

**标头：** Authorization: Bearer <token>

**请求正文：**

```json
{
  \"equation\": \"y = x^2\"
}
```

**响应 (200)：**

```json
{
  \"success\": true,
  \"data\": {
    \"originalEquation\": \"y = x^2\",
    \"substitutionFormulas\": [
      \"z = x + iy\",
      \"z̄ = x - iy\",
      \"x = (z + z̄) / 2\",
      \"y = (z - z̄) / (2i)\"
    ],
    \"steps\": [
      \"步骤 1：替换 x = (z + z̄) / 2\",
      \"步骤 2：替换 y = (z - z̄) / (2i)\",
      \"步骤 3：展开并简化\",
      \"步骤 4：合并同类项\"
    ],
    \"transformedEquation\": \"(z - z̄)/(2i) = ((z + z̄)/2)^2\"
  }
}
```

### 17.3 历史记录端点

#### GET /api/history

**描述：** 获取用户的转换历史记录

**标头：** Authorization: Bearer <token>

**查询参数：**

- `page`（可选）：页码（默认值：1）
- `limit`（可选）：每页项目数（默认值：10）

**响应 (200)：**

```json
{
  \"success\": true,
  \"data\": {
    \"conversions\": [
      {
        \"id\": \"uuid\",
        \"originalEquation\": \"y = x^2\",
        \"transformedEquation\": \"(z - z̄)/(2i) = ((z + z̄)/2)^2\",
        \"createdAt\": \"2026-03-11T10:30:00Z\"
      }
    ],
    \"pagination\": {
      \"currentPage\": 1,
      \"totalPages\": 5,
      \"totalItems\": 47
    }
  }
}
```

#### POST /api/history

**描述：** 将转换保存到历史记录

**标头：** Authorization: Bearer <token>

**请求正文：**

```json
{
  \"originalEquation\": \"y = x^2\",
  \"transformedEquation\": \"(z - z̄)/(2i) = ((z + z̄)/2)^2\",
  \"steps\": \"步骤 1：...，步骤 2：...\"
}
```

**响应 (201)：**

```json
{
  \"success\": true,
  \"data\": {
    \"id\": \"uuid\",
    \"createdAt\": \"2026-03-11T10:30:00Z\"
  }
}
```

#### DELETE /api/history/:id

**描述：** 从历史记录中删除转换

**标头：** Authorization: Bearer <token>

**响应 (200)：**

```json
{
  \"success\": true,
  \"message\": \"转换已删除\"
}
```

### 17.4 用户端点

#### GET /api/user/profile

**描述：** 获取当前用户个人资料

**标头：** Authorization: Bearer <token>

**响应 (200)：**

```json
{
  \"success\": true,
  \"data\": {
    \"id\": \"uuid\",
    \"email\": \"user@example.com\",
    \"fullName\": \"John Doe\",
    \"role\": \"USER\",
    \"createdAt\": \"2026-01-15T08:00:00Z\"
  }
}
```

#### PUT /api/user/profile

**描述：** 更新用户个人资料

**标头：** Authorization: Bearer <token>

**请求正文：**

```json
{
  \"fullName\": \"John Smith\",
  \"email\": \"newmail@example.com\"
}
```

**响应 (200)：**

```json
{
  \"success\": true,
  \"data\": {
    \"id\": \"uuid\",
    \"email\": \"newmail@example.com\",
    \"fullName\": \"John Smith\"
  }
}
```

#### PUT /api/user/change-password

**描述：** 更改用户密码

**标头：** Authorization: Bearer <token>

**请求正文：**

```json
{
  \"currentPassword\": \"OldPass123!\",
  \"newPassword\": \"NewPass123!\",
  \"confirmPassword\": \"NewPass123!\"
}
```

**响应 (200)：**

```json
{
  \"success\": true,
  \"message\": \"密码更改成功\"
}
```

### 17.5 管理员端点

#### GET /api/admin/stats

**描述：** 获取平台统计信息

**标头：** Authorization: Bearer <token>（仅限管理员）

**响应 (200)：**

```json
{
  \"success\": true,
  \"data\": {
    \"totalUsers\": 1247,
    \"activeUsers\": 892,
    \"totalConversions\": 15634,
    \"conversionsToday\": 234
  }
}
```

#### GET /api/admin/users

**描述：** 获取所有用户并进行筛选

**标头：** Authorization: Bearer <token>（仅限管理员）

**查询参数：**

- `search`（可选）：按姓名或电子邮件搜索
- `role`（可选）：按角色筛选（USER/ADMIN）
- `isActive`（可选）：按活动状态筛选
- `page`（可选）：页码
- `limit`（可选）：每页项目数

**响应 (200)：**

```json
{
  \"success\": true,
  \"data\": {
    \"users\": [
      {
        \"id\": \"uuid\",
        \"email\": \"user@example.com\",
        \"fullName\": \"John Doe\",
        \"role\": \"USER\",
        \"isActive\": true,
        \"createdAt\": \"2026-01-15T08:00:00Z\",
        \"conversionCount\": 23
      }
    ],
    \"pagination\": {
      \"currentPage\": 1,
      \"totalPages\": 25,
      \"totalItems\": 1247
    }
  }
}
```

#### GET /api/admin/users/:id

**描述：** 获取用户详细信息

**标头：** Authorization: Bearer <token>（仅限管理员）

**响应 (200)：**

```json
{
  \"success\": true,
  \"data\": {
    \"id\": \"uuid\",
    \"email\": \"user@example.com\",
    \"fullName\": \"John Doe\",
    \"role\": \"USER\",
    \"isActive\": true,
    \"createdAt\": \"2026-01-15T08:00:00Z\",
    \"updatedAt\": \"2026-03-10T14:20:00Z\",
    \"conversionCount\": 23,
    \"lastActivity\": \"2026-03-11T09:15:00Z\"
  }
}
```

#### PUT /api/admin/users/:id

**描述：** 更新用户（角色、活动状态）

**标头：** Authorization: Bearer <token>（仅限管理员）

**请求正文：**

```json
{
  \"role\": \"ADMIN\",
  \"isActive\": false
}
```

**响应 (200)：**

```json
{
  \"success\": true,
  \"message\": \"用户更新成功\"
}
```

#### DELETE /api/admin/users/:id

**描述：** 删除用户账户

**标头：** Authorization: Bearer <token>（仅限管理员）

**响应 (200)：**

```json
{
  \"success\": true,
  \"message\": \"用户删除成功\"
}
```

#### GET /api/admin/activity

**描述：** 获取平台活动日志

**标头：** Authorization: Bearer <token>（仅限管理员）

**查询参数：**

- `userId`（可选）：按用户筛选
- `actionType`（可选）：按操作类型筛选
- `startDate`（可选）：从日期筛选
- `endDate`（可选）：到日期筛选
- `page`（可选）：页码
- `limit`（可选）：每页项目数

**响应 (200)：**

```json
{
  \"success\": true,
  \"data\": {
    \"activities\": [
      {
        \"id\": \"uuid\",
        \"userId\": \"uuid\",
        \"userName\": \"John Doe\",
        \"actionType\": \"CONVERSION_SAVED\",
        \"description\": \"保存转换：y = x^2\",
        \"createdAt\": \"2026-03-11T10:30:00Z\"
      }
    ],
    \"pagination\": {
      \"currentPage\": 1,
      \"totalPages\": 50,
      \"totalItems\": 2456
    }
  }
}
```

#### GET /api/admin/conversions

**描述：** 获取所有用户的转换

**标头：** Authorization: Bearer <token>（仅限管理员）

**查询参数：**

- `userId`（可选）：按用户筛选
- `startDate`（可选）：从日期筛选
- `endDate`（可选）：到日期筛选
- `page`（可选）：页码
- `limit`（可选）：每页项目数

**响应 (200)：**

```json
{
  \"success\": true,
  \"data\": {
    \"conversions\": [
      {
        \"id\": \"uuid\",
        \"userId\": \"uuid\",
        \"userName\": \"John Doe\",
        \"originalEquation\": \"y = x^2\",
        \"transformedEquation\": \"(z - z̄)/(2i) = ((z + z̄)/2)^2\",
        \"createdAt\": \"2026-03-11T10:30:00Z\"
      }
    ],
    \"pagination\": {
      \"currentPage\": 1,
      \"totalPages\": 156,
      \"totalItems\": 15634
    }
  }
}
```

---

## 18. 方程转换引擎逻辑

### 18.1 数学基础

转换使用复变量替换：

- **复数：** z = x + iy
- **复共轭：** z̄ = x - iy
- **反向公式：**
  - x = (z + z̄) / 2
  - y = (z - z̄) / (2i)

### 18.2 转换算法

```
1. 解析输入方程（函数形式 y = f(x)）
2. 验证方程格式
3. 提取函数 f(x)
4. 应用替换公式：
   - 将 x 替换为 (z + z̄) / 2
   - 将 y 替换为 (z - z̄) / (2i)
5. 展开代数表达式
6. 使用复数性质简化
7. 合并同类项
8. 格式化最终方程为复数形式：(z - z̄)/(2i) = f((z + z̄)/2)
9. 生成逐步说明
```

### 18.3 支持的函数类型

**主要支持：函数形式 y = f(x)**

**多项式函数：**

- y = x² → (z - z̄)/(2i) = ((z + z̄)/2)²
- y = x³ + 2x → (z - z̄)/(2i) = ((z + z̄)/2)³ + 2((z + z̄)/2)

**三角函数：**

- y = sin(x) → (z - z̄)/(2i) = sin((z + z̄)/2)
- y = cos(x) → (z - z̄)/(2i) = cos((z + z̄)/2)

**指数函数：**

- y = e^x → (z - z̄)/(2i) = e^((z + z̄)/2)
- y = 2^x → (z - z̄)/(2i) = 2^((z + z̄)/2)

**对数函数：**

- y = ln(x) → (z - z̄)/(2i) = ln((z + z̄)/2)
- y = log₂(x) → (z - z̄)/(2i) = log₂((z + z̄)/2)

**扩展支持：圆锥曲线（二阶形式）**

作为次要功能，平台也支持将二阶平面曲线方程转换为复数形式：

**圆：** x² + y² = r²

- 替换：((z + z̄)/2)² + ((z - z̄)/(2i))² = r²
- 简化：zz̄ = r²

**椭圆：** x²/a² + y²/b² = 1

- 替换：((z + z̄)/2)²/a² + ((z - z̄)/(2i))²/b² = 1
- 简化：(b²(z + z̄)² + a²(z - z̄)²) / (4a²b²) = 1

**抛物线：** y = ax²

- 替换：(z - z̄)/(2i) = a((z + z̄)/2)²
- 简化：(z - z̄) = ai(z + z̄)²

**双曲线：** x²/a² - y²/b² = 1

- 替换：((z + z̄)/2)²/a² - ((z - z̄)/(2i))²/b² = 1
- 简化：(b²(z + z̄)² - a²(z - z̄)²) / (4a²b²) = 1

### 18.4 实现方法

- 使用符号数学库（例如 mathjs、algebra.js）进行解析和简化
- 实现自定义解析器以进行方程输入
- 存储中间步骤以供显示
- 处理边缘情况（除以零、无效格式）

---

## 19. 输入验证规则

### 19.1 注册验证

- **电子邮件：**
  - 必填
  - 有效的电子邮件格式（正则表达式：`/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/`）
  - 最多 255 个字符
  - 必须唯一
- **全名：**
  - 必填
  - 至少 2 个字符
  - 最多 100 个字符
  - 仅字母、空格、连字符、撇号
- **密码：**
  - 必填
  - 至少 8 个字符
  - 必须包含：大写字母、小写字母、数字、特殊字符
  - 最多 128 个字符
- **确认密码：**
  - 必填
  - 必须与密码匹配
- **接受条款：**
  - 必填
  - 必须为 true

### 19.2 登录验证

- **电子邮件：**
  - 必填
  - 有效的电子邮件格式
- **密码：**
  - 必填
  - 至少 8 个字符

### 19.3 方程输入验证

- **格式：**
  - 必须包含 '=' 符号
  - 主要格式：y = f(x)（函数形式）
  - 仅允许的变量：x、y
  - 允许的运算符：+、-、\*、/、^、()、sin、cos、tan、exp、ln、log 等
  - 不允许除以变量
- **长度：**
  - 至少 5 个字符
  - 最多 500 个字符
- **有效输入示例：**
  - `y = x^2`
  - `y = sin(x)`
  - `y = e^x + 2x`
  - `y = ln(x) + x^3`
- **无效输入示例：**
  - `x + y`（无等号）
  - `y = 1/x`（除以变量）
  - `y = sqrt(-1)`（无效操作）

### 19.4 个人资料更新验证

- **全名：** 与注册相同
- **电子邮件：** 与注册相同（必须检查唯一性，不包括当前用户）

### 19.5 密码更改验证

- **当前密码：** 必填
- **新密码：** 与注册密码相同的规则
- **确认密码：** 必须与新密码匹配

---

## 20. 错误处理策略

### 20.1 错误类别

**验证错误 (400)：**

- 无效的输入格式
- 缺少必填字段
- 密码不匹配
- 电子邮件已存在

**认证错误 (401)：**

- 无效的凭据
- 令牌过期
- 令牌缺失

**授权错误 (403)：**

- 权限不足
- 用户访问仅限管理员的路由

**未找到错误 (404)：**

- 用户未找到
- 转换未找到
- 路由未找到

**服务器错误 (500)：**

- 数据库连接失败
- 意外错误
- 转换引擎失败

### 20.2 错误响应格式

```json
{
  \"success\": false,
  \"error\": \"人类可读的错误消息\",
  \"code\": \"ERROR_CODE\",
  \"details\": {
    \"field\": \"email\",
    \"message\": \"电子邮件已存在\"
  }
}
```

### 20.3 前端错误处理

- 为错误显示 toast 通知
- 在表单上显示内联验证错误
- 为失败的操作提供重试按钮
- 在开发中将错误记录到控制台
- 对非关键功能进行优雅降级

### 20.4 后端错误处理

- 在所有异步函数中使用 try-catch 块
- 记录带时间戳和上下文的错误
- 返回一致的错误格式
- 切勿在错误消息中暴露敏感信息
- 使用错误处理中间件

---

## 21. UI/UX 要求

### 21.1 设计系统

**调色板：**

- 主色：蓝色 (#3B82F6)
- 次色：紫色 (#8B5CF6)
- 成功：绿色 (#10B981)
- 警告：黄色 (#F59E0B)
- 错误：红色 (#EF4444)
- 背景：白色 (#FFFFFF)
- 表面：浅灰色 (#F9FAFB)
- 主要文本：深灰色 (#111827)
- 次要文本：中灰色 (#6B7280)

**排版：**

- 字体系列：Inter、system-ui、sans-serif
- 标题：粗体，24-48px
- 正文：常规，14-16px
- 小号：常规，12-14px

**间距：**

- 基本单位：4px
- 常见间距：8px、16px、24px、32px、48px

**边框半径：**

- 小：4px
- 中：8px
- 大：12px
- 超大：16px

**阴影：**

- 小：0 1px 2px rgba(0,0,0,0.05)
- 中：0 4px 6px rgba(0,0,0,0.1)
- 大：0 10px 15px rgba(0,0,0,0.1)

### 21.2 组件指南

**按钮：**

- 主要：蓝色背景，白色文本，中等阴影
- 次要：白色背景，蓝色边框，蓝色文本
- 危险：红色背景，白色文本
- 禁用：灰色背景，灰色文本，无悬停
- 悬停：稍深的阴影，缩放 1.02
- 活动：按下状态，缩放 0.98

**输入字段：**

- 边框：1px 实线灰色
- 焦点：蓝色边框，蓝色阴影
- 错误：红色边框，下方红色文本
- 禁用：灰色背景，灰色文本
- 占位符：浅灰色文本

**卡片：**

- 白色背景
- 中等边框半径
- 中等阴影
- 内边距：24px
- 悬停：阴影略微增加

**表格：**

- 条纹行（交替背景）
- 悬停：浅蓝色背景
- 标题：粗体文本，底部边框
- 响应式：移动设备上水平滚动

### 21.3 响应式断点

- 移动设备：< 640px
- 平板电脑：640px - 1024px
- 桌面：> 1024px

### 21.4 加载状态

- 内容的骨架加载器
- 按钮和操作的旋转器
- 多步骤流程的进度条
- 在加载期间禁用交互元素

### 21.5 空状态

- 友好的插图或图标
- 清晰的消息解释为什么为空
- 添加内容的行动号召按钮
- 示例：尚无转换。从转换您的第一个方程开始！

### 21.6 可访问性

- 交互元素的 ARIA 标签
- 键盘导航支持
- 焦点指示器
- 足够的颜色对比度（WCAG AA）
- 图像的替代文本
- 屏幕阅读器友好

---

## 22. 逐页细分

### 22.1 着陆页 (/)

**英雄部分：**

- 大标题：ComplexCurve Converter
- 乌兹别克语副标题：Tekislikdagi egri chiziqlar tenglamalarini kompleks shaklga o'tkazuvchi aqlli platforma
- 三个 CTA 按钮：Boshlash、Nazariyani ko'rish、Kirish
- 背景：蓝色到紫色的渐变
- 插图：数学曲线或抽象形状

**功能部分：**

- 4-6 个功能卡片的网格
- 每张卡片：图标、标题、简短描述
- 功能：方程转换、逐步说明、历史记录保存、管理工具、多语言

**理论部分：**

- 关于复数的教育内容
- 使用适当的数学渲染显示公式
- 带示例的说明卡片
- 视觉图表（可选）

**示例部分：**

- 多项式、三角函数、指数函数、对数函数的 4 张卡片
- 每张卡片：方程、描述、尝试示例按钮
- 悬停效果：卡片提升并带阴影

**关于部分：**

- 项目描述
- 教育目的声明
- 大学项目背景
- 团队信息（可选）

**页脚：**

- 导航链接
- 联系信息
- 社交媒体链接（可选）
- 版权声明

### 22.2 登录页面 (/login)

**布局：**

- 渐变背景上的居中卡片
- 顶部的徽标
- 标题：Kirish（登录）

**表单字段：**

- 电子邮件输入
- 带显示/隐藏切换的密码输入
- 记住我复选框（可选）
- 忘记密码？链接
- 登录按钮
- 没有账户？注册链接

**验证：**

- 失焦时的实时验证
- 字段下方的错误消息
- 在有效之前禁用提交

### 22.3 注册页面 (/register)

**布局：**

- 与登录页面类似
- 标题：Ro'yxatdan o'tish（注册）

**表单字段：**

- 全名输入
- 电子邮件输入
- 带强度指示器的密码输入
- 确认密码输入
- 条款和隐私复选框
- 注册按钮
- 已有账户？登录链接

**验证：**

- 实时验证
- 密码强度计
- 密码的匹配确认

### 22.4 忘记密码页面 (/forgot-password)

**布局：**

- 居中卡片
- 标题：Parolni tiklash（重置密码）
- 说明文本

**表单：**

- 电子邮件输入
- 提交按钮
- 返回登录链接

**成功状态：**

- 确认消息
- 检查您的电子邮件说明

### 22.5 用户仪表板 (/dashboard)

**布局：**

- 侧边栏导航（移动设备上可折叠）
- 带用户菜单和语言切换器的顶部导航栏
- 主要内容区域

**内容：**

- 欢迎卡片：Xush kelibsiz, [Name]!
- 统计卡片：总转换次数、最近活动、保存的方程
- 最近转换列表（最近 5 个）
- 快速操作按钮：Yangi konvertatsiya（新转换）
- 活动时间线（可选）

**侧边栏：**

- 仪表板（活动）
- 转换器
- 历史记录
- 个人资料
- 注销

### 22.6 转换器页面 (/dashboard/converter)

**布局：**

- 两列布局（左侧输入，右侧输出）
- 响应式：移动设备上堆叠

**输入部分：**

- 方程的大文本区域
- 下方的示例按钮（多项式、三角函数、指数函数、对数函数）
- 转换按钮（主要，大）
- 清除按钮（次要）

**输出部分：**

- 原始方程显示
- 替换公式
- 逐步卡片（可展开）
- 最终结果（突出显示）
- 复制按钮
- 保存按钮
- 图形可视化区域（可选）

**状态：**

- 空：说明文本和示例
- 加载：转换期间的旋转器
- 成功：显示结果
- 错误：友好的错误消息并重试

### 22.7 历史记录页面 (/dashboard/history)

**布局：**

- 列表或表格视图切换
- 搜索栏
- 日期筛选器

**内容：**

- 保存的转换列表
- 每个项目：原始方程、日期、查看/删除按钮
- 分页
- 空状态：尚无保存的转换

**操作：**

- 点击查看完整转换详细信息
- 带确认模态的删除
- 导出（可选）

### 22.8 个人资料页面 (/dashboard/profile)

**布局：**

- 选项卡式界面或部分

**部分：**

1. **个人资料信息：**
   - 显示：姓名、电子邮件、角色、注册日期
   - 编辑按钮 → 带保存/取消的编辑模式

2. **更改密码：**
   - 当前密码输入
   - 新密码输入
   - 确认密码输入
   - 更改密码按钮

3. **偏好设置：**
   - 深色模式切换
   - 语言选择器

4. **账户操作：**
   - 注销按钮
   - 删除账户按钮（带确认）

### 22.9 管理员仪表板 (/admin)

**布局：**

- 管理员侧边栏导航
- 带管理员徽章的顶部导航栏
- 仪表板网格

**内容：**

- 统计卡片：总用户数、活跃用户数、总转换次数、今日活动
- 图表：用户增长、转换趋势（可选）
- 最近活动源
- 快速操作：查看用户、查看活动

**侧边栏：**

- 管理员仪表板（活动）
- 用户
- 活动
- 设置
- 注销

### 22.10 用户管理页面 (/admin/users)

**布局：**

- 顶部的搜索栏
- 筛选器：角色、活动状态
- 用户表

**表列：**

- 头像/首字母
- 全名
- 电子邮件
- 角色
- 状态（活动/非活动）
- 注册日期
- 转换计数
- 操作（查看、编辑、删除）

**操作：**

- 点击行查看用户详细信息
- 编辑按钮 → 带角色和状态字段的模态
- 删除按钮 → 确认模态
- 批量操作（可选）：选择多个，停用/删除

**分页：**

- 每页项目数选择器
- 页面导航

### 22.11 活动监控页面 (/admin/activity)

**布局：**

- 筛选器：用户、操作类型、日期范围
- 活动表或时间线

**表列：**

- 时间戳
- 用户
- 操作类型
- 描述
- 详细信息（可展开）

**操作类型：**

- USER_REGISTERED
- USER_LOGGED_IN
- CONVERSION_SAVED
- PROFILE_UPDATED
- USER_DELETED（由管理员）
- 等

**导出：**

- 导出到 CSV 按钮（可选）

### 22.12 管理员设置页面 (/admin/settings)

**内容：**

- 管理员个人资料信息
- 系统偏好设置（可选）
- 平台设置（可选）
- 备份/恢复选项（可选）

---

## 23. 管理面板细分

### 23.1 管理员访问控制

- 只有 role='ADMIN' 的用户才能访问 /admin 路由
- 中间件检查 JWT 令牌和角色
- 如果用户不是管理员，则重定向到 /dashboard
- 导航栏中显示管理员徽章

### 23.2 管理员功能

- 查看所有注册用户
- 搜索和筛选用户
- 查看用户详细信息和活动
- 编辑用户角色（提升为管理员，降级为用户）
- 停用/激活用户账户
- 删除用户账户
- 查看平台上的所有转换历史记录
- 按用户或日期筛选转换
- 查看平台统计信息和趋势
- 监控最近的活动日志
- 访问系统设置

### 23.3 管理员活动记录

所有管理员操作都应记录：

- USER_ROLE_CHANGED：管理员 [name] 将用户 [name] 的角色从 USER 更改为 ADMIN
- USER_DEACTIVATED：管理员 [name] 停用了用户 [name]
- USER_DELETED：管理员 [name] 删除了用户 [name]
- USER_ACTIVATED：管理员 [name] 激活了用户 [name]

---

## 24. 转换历史记录逻辑

### 24.1 保存转换

- 用户在转换后点击保存按钮
- 前端向 /api/history 发送 POST 请求
- 后端使用 userId 创建 ConversionHistory 记录
- 成功 toast：转换已保存到历史记录

### 24.2 查看历史记录

- 用户导航到 /dashboard/history
- 前端获取 GET /api/history
- 按时间顺序显示转换（最新的在前）
- 大历史记录的分页

### 24.3 删除历史记录

- 用户点击历史记录项上的删除按钮
- 确认模态：您确定要删除此转换吗？
- 前端发送 DELETE /api/history/:id
- 后端验证所有权（userId 匹配）
- 从列表中删除并带动画
- 成功 toast：转换已删除

### 24.4 历史记录隐私

- 用户只能查看自己的历史记录
- 后端按 JWT 令牌中的 userId 筛选
- 管理员可以通过 /api/admin/conversions 查看所有历史记录

---

## 25. 安全要求

### 25.1 密码安全

- 使用 bcrypt 对密码进行哈希处理，盐轮次 = 10
- 切勿存储明文密码
- 切勿在 API 响应中返回密码哈希
- 强制执行强密码策略（8+ 个字符，混合大小写、数字、符号）

### 25.2 认证安全

- 使用带过期时间（24 小时）的 JWT 令牌
- 安全地存储令牌（httpOnly cookie 或安全 localStorage）
- 实施令牌刷新机制（可选）
- 注销应使令牌无效（黑名单或短过期时间）

### 25.3 授权安全

- 在所有受保护路由上验证 JWT 令牌
- 检查管理员路由的用户角色
- 切勿信任客户端角色检查
- 实施基于角色的访问控制中间件

### 25.4 输入验证

- 在前端和后端验证所有输入
- 清理输入以防止 XSS 攻击
- 使用参数化查询以防止 SQL 注入
- 限制输入长度以防止 DoS

### 25.5 速率限制

- 在认证端点上实施速率限制：
  - 登录：每 15 分钟每个 IP 5 次尝试
  - 注册：每小时每个 IP 3 次尝试
  - 密码重置：每小时每个电子邮件 3 次尝试
- 超过限制时返回 429 请求过多

### 25.6 HTTPS

- 在生产中使用 HTTPS
- 将 HTTP 重定向到 HTTPS
- 在 cookie 上设置安全标志

### 25.7 CORS

- 配置 CORS 以仅允许受信任的来源
- 在开发中：允许 localhost
- 在生产中：仅允许生产域

### 25.8 错误消息

- 切勿在错误消息中暴露敏感信息
- 对认证失败使用通用消息
- 示例：无效的凭据而不是未找到电子邮件

### 25.9 会话管理

- 实施会话超时（24 小时）
- 提供注销功能
- 注销时清除会话数据

### 25.10 管理员操作记录

- 记录所有带时间戳和管理员 ID 的管理员操作
- 将日志存储在 SystemActivity 表中
- 提供审计跟踪以进行安全审查

---

## 26. 性能要求

### 26.1 响应时间

- API 端点：< 500 毫秒（第 95 百分位）
- 方程转换：< 2 秒
- 页面加载：在 3G 连接上 < 3 秒
- 数据库查询：< 200 毫秒

### 26.2 可扩展性

- 最初支持 100 个并发用户
- 为水平扩展而设计
- 对数据库使用连接池
- 为静态内容实施缓存

### 26.3 数据库优化

- 索引经常查询的字段（email、userId、createdAt）
- 对大结果集使用分页
- 使用 EXPLAIN ANALYZE 优化查询
- 实施数据库连接池

### 26.4 前端优化

- 路由的代码拆分
- 图像的延迟加载
- 缩小和压缩资产
- 对静态资产使用 CDN（可选）
- 实施 service worker 以进行离线支持（可选）

### 26.5 缓存策略

- 缓存静态资产（CSS、JS、图像）
- 在适当的地方缓存 API 响应（用户个人资料、统计信息）
- 对条件请求使用 ETag
- 实施浏览器缓存标头

---

## 27. 日志记录和审计跟踪

### 27.1 应用程序日志记录

- 日志级别：ERROR、WARN、INFO、DEBUG
- 日志格式：时间戳、级别、消息、上下文
- 在开发中记录到控制台
- 在生产中记录到文件或服务（例如 Winston、Pino）

### 27.2 错误日志记录

- 记录所有带堆栈跟踪的服务器错误
- 记录认证失败
- 记录验证错误
- 包括请求上下文（用户 ID、端点、方法）

### 27.3 活动日志记录

- 记录用户操作：
  - 注册
  - 登录/注销
  - 保存的转换
  - 更新的个人资料
  - 更改的密码
- 记录管理员操作：
  - 更改的用户角色
  - 停用/删除的用户
  - 更改的设置

### 27.4 审计跟踪

- 将活动日志存储在 SystemActivity 表中
- 包括：userId、actionType、description、timestamp
- 提供管理员界面以查看审计跟踪
- 按用户、操作类型、日期范围筛选
- 导出审计日志（可选）

---

## 28. 部署计划

### 28.1 开发环境

- 带热重载的本地开发
- 使用环境变量进行配置
- 用于本地数据库的 Docker Compose（可选）

### 28.2 暂存环境

- 在生产之前部署到暂存服务器
- 在暂存中测试所有功能
- 使用暂存数据库（与生产分开）

### 28.3 生产环境

- 将前端部署到 Vercel 或 Netlify
- 将后端部署到 Railway、Render 或 AWS
- 使用托管 PostgreSQL（例如 Supabase、Railway、AWS RDS）
- 配置环境变量
- 设置 SSL 证书
- 配置域和 DNS

### 28.4 CI/CD 管道

- 使用 GitHub Actions 或 GitLab CI
- 推送时自动测试
- 合并到 develop 时自动部署到暂存
- 手动批准生产部署

### 28.5 监控

- 设置应用程序监控（例如 Sentry 用于错误跟踪）
- 监控服务器健康状况（CPU、内存、磁盘）
- 设置正常运行时间监控（例如 UptimeRobot）
- 为关键错误配置警报

### 28.6 备份策略

- 每日自动数据库备份
- 将备份存储在安全位置（S3、Google Cloud Storage）
- 定期测试备份恢复
- 保留策略：保留每日备份 30 天

---

## 29. 环境变量

### 29.1 后端环境变量

```env
# 服务器
PORT=5000
NODE_ENV=development

# 数据库
DATABASE_URL=postgresql://user:password@localhost:5432/complexcurve

# JWT
JWT_SECRET=your-super-secret-jwt-key-change-in-production
JWT_EXPIRES_IN=24h

# CORS
CORS_ORIGIN=http://localhost:3000

# 速率限制
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=5

# 电子邮件（用于密码重置）
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-email-password
EMAIL_FROM=noreply@complexcurve.com
```

### 29.2 前端环境变量

```env
# API
REACT_APP_API_URL=http://localhost:5000/api

# 环境
REACT_APP_ENV=development
```

---

## 30. 文件夹结构

### 30.1 前端结构

```
frontend/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── assets/
│       └── images/
├── src/
│   ├── components/
│   │   ├── common/
│   │   ├── auth/
│   │   ├── converter/
│   │   ├── dashboard/
│   │   ├── history/
│   │   ├── profile/
│   │   └── admin/
│   ├── pages/
│   │   ├── public/
│   │   ├── user/
│   │   └── admin/
│   ├── contexts/
│   ├── hooks/
│   ├── services/
│   ├── utils/
│   ├── types/
│   ├── i18n/
│   ├── styles/
│   │   └── globals.css
│   ├── App.tsx
│   ├── index.tsx
│   └── routes.tsx
├── .env.example
├── .gitignore
├── package.json
├── tsconfig.json
└── tailwind.config.js
```

### 30.2 后端结构

```
backend/
├── src/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── types/
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── migrations/
│   ├── config/
│   └── app.ts
├── tests/
│   ├── unit/
│   └── integration/
├── .env.example
├── .gitignore
├── package.json
├── tsconfig.json
└── jest.config.js
```

---

## 31. 测试策略

### 31.1 单元测试

- 测试单个函数和组件
- 测试转换引擎逻辑
- 测试验证函数
- 测试实用函数
- 覆盖率目标：70%+

### 31.2 集成测试

- 测试 API 端点
- 测试认证流程
- 测试数据库操作
- 测试中间件

### 31.3 E2E 测试（可选）

- 测试完整的用户流程
- 测试注册 → 登录 → 转换 → 保存 → 注销
- 测试管理员用户管理流程
- 使用 Playwright 或 Cypress

### 31.4 手动测试

- 在不同浏览器上测试（Chrome、Firefox、Safari）
- 在不同设备上测试（移动设备、平板电脑、桌面）
- 测试所有用户角色（访客、用户、管理员）
- 测试错误场景
- 测试边缘情况

---

## 32. 验收标准

### 32.1 认证

- [ ] 用户可以使用有效的电子邮件和密码注册
- [ ] 用户无法使用现有电子邮件注册
- [ ] 用户可以使用正确的凭据登录
- [ ] 用户无法使用不正确的凭据登录
- [ ] 用户在登录后被重定向到仪表板
- [ ] 管理员在登录后被重定向到管理面板
- [ ] 用户可以成功注销
- [ ] 用户可以请求密码重置
- [ ] 用户可以使用有效令牌重置密码

### 32.2 方程转换

- [ ] 用户可以在转换器中输入方程
- [ ] 用户可以选择示例方程
- [ ] 系统验证方程格式
- [ ] 系统为无效方程显示错误
- [ ] 系统正确转换方程
- [ ] 系统显示逐步转换
- [ ] 用户可以复制转换结果
- [ ] 用户可以将转换保存到历史记录
- [ ] 用户可以清除转换器输入

### 32.3 用户仪表板

- [ ] 仪表板显示带用户姓名的欢迎消息
- [ ] 仪表板显示转换统计信息
- [ ] 仪表板显示最近的转换
- [ ] 用户可以从仪表板导航到转换器
- [ ] 用户可以从仪表板导航到历史记录
- [ ] 用户可以从仪表板导航到个人资料

### 32.4 转换历史记录

- [ ] 用户可以查看其转换历史记录
- [ ] 历史记录按时间顺序显示转换
- [ ] 用户可以搜索历史记录
- [ ] 用户可以按日期筛选历史记录
- [ ] 用户可以从历史记录中删除转换
- [ ] 用户无法查看其他用户的历史记录

### 32.5 用户个人资料

- [ ] 用户可以查看个人资料信息
- [ ] 用户可以编辑姓名和电子邮件
- [ ] 用户可以更改密码
- [ ] 用户可以切换深色模式
- [ ] 用户可以切换语言
- [ ] 个人资料更改成功保存

### 32.6 管理面板

- [ ] 管理员可以访问管理面板
- [ ] 非管理员无法访问管理面板
- [ ] 管理员仪表板显示平台统计信息
- [ ] 管理员可以查看所有用户
- [ ] 管理员可以搜索用户
- [ ] 管理员可以按角色/状态筛选用户
- [ ] 管理员可以查看用户详细信息
- [ ] 管理员可以编辑用户角色
- [ ] 管理员可以停用用户
- [ ] 管理员可以删除用户
- [ ] 管理员可以查看所有转换
- [ ] 管理员可以按用户/日期筛选转换
- [ ] 管理员可以查看活动日志

### 32.7 多语言支持

- [ ] 平台默认为乌兹别克语
- [ ] 用户可以切换到俄语
- [ ] 用户可以切换到英语
- [ ] 语言偏好在会话之间保持
- [ ] 所有 UI 文本都正确翻译

### 32.8 响应式设计

- [ ] 应用程序在移动设备上工作
- [ ] 应用程序在平板电脑上工作
- [ ] 应用程序在桌面上工作
- [ ] 导航在所有设备上都可访问
- [ ] 表单在所有设备上都可用

---

## 33. 示例用户流程

### 33.1 新用户注册和首次转换

1. 用户访问着陆页
2. 用户点击 Boshlash 或 Register 按钮
3. 用户填写注册表单（电子邮件、姓名、密码）
4. 用户接受条款并提交
5. 系统创建账户并重定向到登录
6. 用户使用凭据登录
7. 系统重定向到用户仪表板
8. 用户点击 Yangi konvertatsiya 按钮
9. 用户输入方程或选择示例
10. 用户点击 Convert 按钮
11. 系统显示带步骤的转换结果
12. 用户点击 Save 按钮
13. 系统保存到历史记录并显示成功消息
14. 用户导航到历史记录页面
15. 用户在列表中看到保存的转换

### 33.2 管理员管理用户

1. 管理员使用管理员凭据登录
2. 系统重定向到管理员仪表板
3. 管理员看到平台统计信息
4. 管理员点击侧边栏中的 Users
5. 管理员看到所有用户的列表
6. 管理员搜索特定用户
7. 管理员点击用户行查看详细信息
8. 管理员点击 Edit 按钮
9. 管理员将用户角色更改为 ADMIN
10. 管理员保存更改
11. 系统更新用户角色并记录操作
12. 管理员导航到活动日志
13. 管理员在活动源中看到记录的操作

### 33.3 用户查看转换历史记录

1. 用户登录
2. 用户导航到仪表板
3. 用户点击侧边栏中的 History
4. 系统显示保存的转换列表
5. 用户按日期范围筛选
6. 系统使用筛选结果更新列表
7. 用户点击转换以查看详细信息
8. 系统显示带步骤的完整转换
9. 用户点击 Delete 按钮
10. 系统显示确认模态
11. 用户确认删除
12. 系统删除转换并显示成功消息

---

## 34. 风险和边缘情况

### 34.1 安全风险

- **风险：** 登录的暴力攻击
  - **缓解：** 实施速率限制
- **风险：** SQL 注入
  - **缓解：** 使用参数化查询（Prisma ORM）
- **风险：** XSS 攻击
  - **缓解：** 清理所有输入，使用 React 的内置 XSS 保护
- **风险：** 未经授权的管理员访问
  - **缓解：** 严格的基于角色的中间件，JWT 验证

### 34.2 数据完整性风险

- **风险：** 用户删除带转换历史记录的账户
  - **缓解：** 级联删除或带保留期的软删除
- **风险：** 管理员意外删除活动用户
  - **缓解：** 确认模态、活动记录、备份策略

### 34.3 性能风险

- **风险：** 大转换历史记录减慢查询速度
  - **缓解：** 分页、数据库索引
- **风险：** 复杂方程转换时间过长
  - **缓解：** 设置超时限制、显示加载状态、优化算法

### 34.4 边缘情况

**无效方程输入：**

- 空输入 → 显示验证错误
- 格式错误的方程 → 显示友好的错误消息
- 不支持的函数 → 显示带支持格式的错误
- 除以零 → 在转换引擎中优雅处理

**用户账户状态：**

- 非活动用户尝试登录 → 显示账户已停用消息
- 已删除用户的历史记录 → 级联删除或匿名化
- 用户将电子邮件更改为现有电子邮件 → 显示电子邮件已存在错误

**管理员操作：**

- 管理员尝试删除自己 → 使用错误消息阻止
- 管理员尝试降级最后一个管理员 → 使用错误消息阻止
- 管理员查看已删除用户的活动 → 显示用户已删除占位符

**会话管理：**

- 令牌在活动会话期间过期 → 重定向到带消息的登录
- 用户在多个设备上登录 → 允许或实施单个会话（可配置）

**转换引擎：**

- 无解的方程 → 显示无解存在消息
- 不支持类型之外的方程 → 显示不支持的方程类型错误
- 非常长的方程 → 截断显示，允许点击查看完整内容

---

## 35. 未来改进

### 35.1 阶段 2 功能

- 注册时的电子邮件验证
- 双因素认证 (2FA)
- 社交登录（Google、Facebook）
- 将转换历史记录导出为 PDF
- 通过链接共享转换
- 协作功能（团队、共享工作区）

### 35.2 阶段 3 功能

- 移动原生应用（iOS、Android）
- 带交互式控件的高级图形绘制
- 支持 3D 曲线和曲面
- LaTeX 方程输入支持
- 批量转换处理
- 用于第三方集成的 API 访问

### 35.3 教育增强

- 交互式教程
- 复分析视频课程
- 带解决方案的练习题
- 游戏化（徽章、成就）
- 进度跟踪
- 与学习管理系统 (LMS) 集成

### 35.4 技术改进

- 微服务架构
- GraphQL API
- 使用 WebSocket 的实时协作
- 使用 Redis 的高级缓存
- 用于高级搜索的 Elasticsearch
- 用于从图像识别方程的机器学习

---

## 36. 本地开发设置说明

### 36.1 先决条件

- 已安装 Node.js 18+
- 已安装 PostgreSQL 14+（或使用 Docker）
- 已安装 Git
- 代码编辑器（推荐 VS Code）

### 36.2 克隆存储库

```bash
git clone https://github.com/yourusername/complexcurve-converter.git
cd complexcurve-converter
```

### 36.3 后端设置

```bash
cd backend
npm install

# 复制环境变量
cp .env.example .env

# 使用您的数据库凭据编辑 .env
# DATABASE_URL=postgresql://user:password@localhost:5432/complexcurve

# 运行数据库迁移
npx prisma migrate dev

# 种子数据库（可选）
npx prisma db seed

# 启动开发服务器
npm run dev
```

后端将在 http://localhost:5000 上运行

### 36.4 前端设置

```bash
cd frontend
npm install

# 复制环境变量
cp .env.example .env

# 编辑 .env
# REACT_APP_API_URL=http://localhost:5000/api

# 启动开发服务器
npm start
```

前端将在 http://localhost:3000 上运行

### 36.5 使用 Docker 设置数据库（替代方案）

```bash
# 在项目根目录中创建 docker-compose.yml
docker-compose up -d

# 这将在 localhost:5432 上启动 PostgreSQL
```

### 36.6 创建管理员用户

```bash
# 在后端目录中
npx prisma studio

# 或使用 SQL
psql -d complexcurve
UPDATE users SET role = 'ADMIN' WHERE email = 'admin@example.com';
```

### 36.7 运行测试

```bash
# 后端测试
cd backend
npm test

# 前端测试
cd frontend
npm test
```

---

## 37. 生产部署说明

### 37.1 前端部署 (Vercel)

```bash
# 安装 Vercel CLI
npm install -g vercel

# 登录到 Vercel
vercel login

# 部署
cd frontend
vercel --prod

# 在 Vercel 仪表板中设置环境变量
# REACT_APP_API_URL=https://api.complexcurve.com/api
```

### 37.2 后端部署 (Railway)

```bash
# 安装 Railway CLI
npm install -g @railway/cli

# 登录到 Railway
railway login

# 初始化项目
cd backend
railway init

# 添加 PostgreSQL 数据库
railway add postgresql

# 部署
railway up

# 在 Railway 仪表板中设置环境变量
```

### 37.3 生产中的数据库迁移

```bash
# 运行迁移
railway run npx prisma migrate deploy

# 或连接到生产数据库
DATABASE_URL=\"postgresql://...\" npx prisma migrate deploy
```

### 37.4 SSL 配置

- Vercel 提供自动 SSL
- Railway 提供自动 SSL
- 在平台仪表板中配置自定义域

### 37.5 环境变量检查清单

**后端：**

- [ ] DATABASE_URL
- [ ] JWT_SECRET（生成强密钥）
- [ ] NODE_ENV=production
- [ ] CORS_ORIGIN（前端 URL）
- [ ] EMAIL 凭据（如果使用电子邮件功能）

**前端：**

- [ ] REACT_APP_API_URL（后端 URL）
- [ ] REACT_APP_ENV=production

---

## 38. 维护和支持

### 38.1 定期维护任务

- 每天监控错误日志
- 每周审查用户反馈
- 每月更新依赖项
- 审查安全公告
- 每天备份数据库
- 每月测试备份恢复

### 38.2 性能监控

- 监控 API 响应时间
- 监控数据库查询性能
- 监控服务器资源使用情况
- 为停机设置警报

### 38.3 用户支持

- 提供支持电子邮件
- 创建 FAQ 部分
- 记录常见问题
- 在 24 小时内回复用户查询

---

## 39. 许可证和致谢

### 39.1 许可证

此项目作为大学软件工程项目开发。

### 39.2 致谢

- 项目由 [您的姓名/团队] 开发
- 大学：[大学名称]
- 课程：[课程名称]
- 讲师：[讲师姓名]
- 年份：2026

### 39.3 致谢

- 基于复分析理论的数学公式
- 受现代 SaaS 平台启发的 UI 设计
- 使用的开源库（列出主要依赖项）

---

## 40. 联系和支持

### 40.1 项目存储库

GitHub：https://github.com/yourusername/complexcurve-converter

### 40.2 文档

完整文档：[文档链接]

### 40.3 支持

电子邮件：support@complexcurve.com

### 40.4 演示

在线演示：https://complexcurve.vercel.app

---

## 结论

此综合规格说明文档为开发 ComplexCurve Converter 平台提供了完整的蓝图。它涵盖了从架构和设计到实施细节和部署策略的所有方面。该文档应作为整个项目生命周期中开发人员、设计师和利益相关者的主要参考。

**关键成功因素：**

- 清晰的用户和管理员角色分离
- 强大的认证和授权
- 准确的数学转换引擎（主要支持函数形式 y = f(x)）
- 直观的用户界面
- 全面的管理工具
- 多语言支持
- 生产就绪的安全措施
- 可扩展的架构

**下一步：**

1. 审查并批准此规格说明
2. 设置开发环境
3. 初始化项目存储库
4. 按照 MVP 范围开始实施
5. 进行定期测试和代码审查
6. 部署到暂存进行测试
7. 最终部署到生产
8. 准备项目答辩演示

祝您的大学项目好运！🚀
