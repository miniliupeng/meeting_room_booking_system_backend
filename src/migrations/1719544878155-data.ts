import { MigrationInterface, QueryRunner } from "typeorm";

export class Data1719544878155 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("INSERT INTO `users` VALUES (1,'guang','e10adc3949ba59abbe56e057f20f883e','神说要有光','xxxx@xx.com',NULL,NULL,0,0,'2024-06-24 08:51:06.728109','2024-06-24 08:51:06.728109'),(2,'zhangsan','96e79218965eb72c92a549dd5a330112','张三','xxx@xx.com',NULL,'13233323333',0,1,'2024-06-25 05:57:44.929322','2024-06-25 05:57:44.929322'),(3,'lisi','e10adc3949ba59abbe56e057f20f883e','李四','yy@yy.com',NULL,NULL,0,0,'2024-06-25 05:57:44.945884','2024-06-26 03:31:32.000000');")
        await queryRunner.query("INSERT INTO `meeting_room` VALUES (1,'木星',10,'一层西','白板','',0,'2024-06-26 09:54:29.420781','2024-06-26 09:54:29.420781'),(2,'金星',5,'二层东','','',0,'2024-06-26 09:54:29.420781','2024-06-26 09:54:29.420781'),(3,'天王星',30,'三层东','白板，电视','',0,'2024-06-26 09:54:29.420781','2024-06-26 09:54:29.420781');")
        await queryRunner.query("INSERT INTO `booking` VALUES (1,'2024-06-27 10:19:25','2024-06-27 11:19:25','申请中','','2024-06-27 02:19:25.423925','2024-06-27 02:19:25.423925',1,3),(3,'2024-06-27 10:19:25','2024-06-27 11:19:25','申请中','','2024-06-27 02:19:25.466020','2024-06-27 02:19:25.466020',2,3),(13,'2023-12-31 09:40:59','2023-12-31 09:57:39','申请中','','2024-06-27 03:33:21.838556','2024-06-27 03:33:21.838556',1,3),(14,'2023-12-31 09:40:59','2023-12-31 09:57:39','申请中','','2024-06-27 03:41:11.074090','2024-06-27 03:41:11.074090',1,3);")
        await queryRunner.query("INSERT INTO `permissions` VALUES (1,'ccc','访问 ccc 接口'),(2,'ddd','访问 ddd 接口');")
        await queryRunner.query("INSERT INTO `roles` VALUES (1,'管理员'),(2,'普通用户');")
        await queryRunner.query("INSERT INTO `role_permissions` VALUES (1,1),(1,2),(2,1);")
        await queryRunner.query("INSERT INTO `user_roles` VALUES (2,1),(3,2);")
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
